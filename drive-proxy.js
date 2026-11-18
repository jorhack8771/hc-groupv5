import { Readable } from 'node:stream';

const DRIVE_ID_RE = /^[A-Za-z0-9_-]{20,80}$/;
const RANGE_RE = /^bytes=\d*-\d*(,\s*\d*-\d*)*$/i;

function buildDriveDownloadUrl(id, extraParams = {}) {
  const url = new URL('https://drive.usercontent.google.com/download');
  url.searchParams.set('id', id);
  url.searchParams.set('export', 'download');
  url.searchParams.set('confirm', extraParams.confirm || 't');
  if (extraParams.uuid) url.searchParams.set('uuid', extraParams.uuid);
  if (extraParams.at) url.searchParams.set('at', extraParams.at);
  return url.toString();
}

function extractConfirmParams(html) {
  const params = {};
  const confirmMatch = html.match(/name=["']confirm["'][^>]*value=["']([^"']+)["']/i);
  const uuidMatch = html.match(/name=["']uuid["'][^>]*value=["']([^"']+)["']/i);
  const atMatch = html.match(/name=["']at["'][^>]*value=["']([^"']+)["']/i);
  if (confirmMatch) params.confirm = confirmMatch[1];
  if (uuidMatch) params.uuid = uuidMatch[1];
  if (atMatch) params.at = atMatch[1];
  return params;
}

export async function handleDriveVideoRequest(req, res) {
  const method = (req.method || 'GET').toUpperCase();
  if (method !== 'GET' && method !== 'HEAD') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET, HEAD');
    res.end('Method Not Allowed');
    return;
  }

  let fileId = '';
  try {
    const parsed = new URL(req.url || '/', 'http://localhost');
    fileId = (parsed.searchParams.get('id') || '').trim();
  } catch {
    fileId = '';
  }

  if (!DRIVE_ID_RE.test(fileId)) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ ok: false, error: 'Invalid Drive file id' }));
    return;
  }

  const headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'identity',
    'User-Agent': 'Mozilla/5.0 (compatible; HCGroupMediaStream/1.0)'
  };
  const rangeHeader = typeof req.headers?.range === 'string' ? req.headers.range.trim() : '';
  if (rangeHeader && RANGE_RE.test(rangeHeader)) {
    headers['Range'] = rangeHeader;
  }

  const ac = new AbortController();
  const abortUpstream = () => {
    if (!ac.signal.aborted) ac.abort();
  };
  req.on('close', abortUpstream);
  res.on('close', abortUpstream);

  try {
    let upstream = await fetch(buildDriveDownloadUrl(fileId), {
      method,
      headers,
      redirect: 'follow',
      signal: ac.signal
    });

    const contentType = (upstream.headers.get('content-type') || '').toLowerCase();
    if (upstream.ok && contentType.includes('text/html') && method === 'GET') {
      const html = await upstream.text();
      const extra = extractConfirmParams(html);
      upstream = await fetch(buildDriveDownloadUrl(fileId, extra), {
        method,
        headers,
        redirect: 'follow',
        signal: ac.signal
      });
    }

    const finalType = (upstream.headers.get('content-type') || '').toLowerCase();
    if (!upstream.ok || finalType.includes('text/html')) {
      if (upstream.body) {
        try { await upstream.body.cancel(); } catch {}
      }
      if (!res.headersSent) {
        res.statusCode = upstream.ok ? 502 : upstream.status;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ ok: false, error: 'Unable to stream Drive video' }));
      }
      return;
    }

    const mediaType = /^video\/|^audio\//i.test(finalType) ? finalType.split(';')[0] : 'video/mp4';
    res.statusCode = upstream.status === 206 ? 206 : 200;
    res.setHeader('Content-Type', mediaType);
    res.setHeader('Accept-Ranges', upstream.headers.get('accept-ranges') || 'bytes');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('X-Content-Type-Options', 'nosniff');

    const contentRange = upstream.headers.get('content-range');
    if (contentRange) res.setHeader('Content-Range', contentRange);

    const contentLength = upstream.headers.get('content-length');
    if (contentLength) res.setHeader('Content-Length', contentLength);

    if (method === 'HEAD' || !upstream.body) {
      res.end();
      return;
    }

    const nodeStream = Readable.fromWeb(upstream.body);
    nodeStream.on('error', () => {
      abortUpstream();
      if (!res.destroyed) res.destroy();
    });
    res.on('error', abortUpstream);
    nodeStream.pipe(res);
  } catch (err) {
    if (err?.name === 'AbortError' || ac.signal.aborted) return;
    if (!res.headersSent) {
      res.statusCode = 502;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ ok: false, error: 'Upstream Drive error' }));
    } else if (!res.destroyed) {
      res.destroy();
    }
  }
}
