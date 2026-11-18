/**
 * HC GROUP — Analítica propia del sitio (se ve en el Panel > Analítica)
 * ---------------------------------------------------------------
 * Va en: public/hc-analitica.js   y se carga en index.html y 404.html con
 *   <script src="/hc-analitica.js" defer></script>
 *
 * Qué mide (de forma anónima: sin IP, sin nombres, sin correos):
 *   vista ........ cada vez que alguien abre la página
 *   seccion ...... qué secciones ve (nosotros, empresas, reseñas, faq…)
 *   busqueda ..... lo que escriben en el buscador
 *   interes ...... la unidad que eligen en el formulario (Medicodont, Vetcare…)
 *   clic ......... WhatsApp, correo, llamada, PDF, redes y enlaces externos
 *   formulario ... envíos de contacto, catálogo y reseñas
 *   video ........ videos de clientes reproducidos
 *   salida ....... tiempo que estuvo en la página (segundos)
 * El país se calcula en el servidor a partir de la zona horaria del navegador.
 *
 * Para que TUS visitas no cuenten: abre una vez el sitio con  ?no_contar=1
 * (para volver a contarte:  ?no_contar=0 ).
 */
(function () {
  'use strict';

  var ENDPOINT = window.HC_ANALITICA_ENDPOINT ||
    'https://script.google.com/macros/s/AKfycbxdrDuVRyS3Reh6NXRFg7zlgLeFogGgCok3rozmXsat8HkopItD000-dvN4guBnF0k/exec';

  function leer(store, k) { try { return window[store].getItem(k); } catch (e) { return null; } }
  function guardar(store, k, v) { try { window[store].setItem(k, v); } catch (e) {} }
  function borrar(store, k) { try { window[store].removeItem(k); } catch (e) {} }

  // ---- No medir: robots, vistas previas del editor, o el administrador ----
  var q = location.search;
  if (/[?&]no_contar=1\b/.test(q)) guardar('localStorage', 'hc_no_contar', '1');
  if (/[?&]no_contar=0\b/.test(q)) borrar('localStorage', 'hc_no_contar');
  if (leer('localStorage', 'hc_no_contar') === '1') return;
  if (navigator.webdriver || /bot|crawl|spider|slurp|lighthouse|headless|preview/i.test(navigator.userAgent || '')) return;
  if (/^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(location.hostname)) return;
  if (/aistudio|googleusercontent|usercontent\.goog|webcontainer|stackblitz|codesandbox/i.test(location.hostname)) return;
  if (!/^https:\/\/script\.google\.com\//.test(ENDPOINT)) return;

  // ---- Identificadores anónimos (aleatorios, sin datos personales) ----
  function idAleatorio() {
    var a = new Uint8Array(10);
    (window.crypto || window.msCrypto).getRandomValues(a);
    return Array.prototype.map.call(a, function (b) { return (b % 36).toString(36); }).join('') + Date.now().toString(36).slice(-6);
  }
  var visitante = leer('localStorage', 'hc_v');
  var esNuevo = leer('sessionStorage', 'hc_nuevo') === '1';
  if (!visitante) {
    visitante = idAleatorio();
    guardar('localStorage', 'hc_v', visitante);
    guardar('sessionStorage', 'hc_nuevo', '1');
    esNuevo = true;
  }
  var sesion = leer('sessionStorage', 'hc_s');
  if (!sesion) { sesion = idAleatorio(); guardar('sessionStorage', 'hc_s', sesion); }

  function dispositivo() {
    var w = Math.min(window.innerWidth || 0, screen.width || 9999);
    return w < 768 ? 'Móvil' : (w < 1100 ? 'Tablet' : 'Escritorio');
  }
  function origen() {
    var utm = (q.match(/[?&]utm_source=([^&]+)/) || [])[1];
    if (utm) { try { return 'utm:' + decodeURIComponent(utm).slice(0, 60); } catch (e) { return 'utm:' + utm.slice(0, 60); } }
    if (/[?&]fbclid=/.test(q)) return 'facebook.com';
    if (/[?&]gclid=/.test(q)) return 'google-ads';
    try {
      var h = document.referrer ? new URL(document.referrer).hostname : '';
      return (h && h !== location.hostname) ? h.replace(/^www\./, '').slice(0, 80) : '';
    } catch (e) { return ''; }
  }
  var zona = '';
  try { zona = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
  var base = {
    tipo: 'analitica',
    v: visitante, s: sesion, nuevo: esNuevo,
    tz: zona, lang: (navigator.language || '').slice(0, 12),
    disp: dispositivo(), ref: origen(), p: location.pathname.slice(0, 80)
  };

  // ---- Cola de eventos: se envían juntos cada pocos segundos ----
  var cola = [], reloj = null, enviados = 0, MAX_POR_PAGINA = 120;
  function evento(t, d) {
    if (enviados + cola.length >= MAX_POR_PAGINA) return;
    cola.push({ t: t, d: String(d == null ? '' : d).replace(/\s+/g, ' ').trim().slice(0, 120) });
    if (!reloj) reloj = setTimeout(enviar, 6000);
  }
  function enviar() {
    clearTimeout(reloj); reloj = null;
    if (!cola.length) return;
    var lote = cola.splice(0, 40);
    enviados += lote.length;
    var cuerpo = JSON.stringify(Object.assign({}, base, { eventos: lote }));
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT, new Blob([cuerpo], { type: 'text/plain;charset=utf-8' }))) {
        if (cola.length) reloj = setTimeout(enviar, 1000);
        return;
      }
    } catch (e) {}
    try {
      fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', keepalive: true, body: cuerpo,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' } }).catch(function () {});
    } catch (e) {}
    if (cola.length) reloj = setTimeout(enviar, 1000);
  }

  // ---- 1) Vista de página ----
  evento('vista', document.title || location.pathname);

  // ---- 2) Secciones vistas (una vez cada una) ----
  var vistas = {};
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id || 'pie';
        if (vistas[id]) return;
        vistas[id] = true;
        evento('seccion', id);
        obs.unobserve(en.target);
      });
    }, { threshold: 0.35 });
    var observar = function () {
      document.querySelectorAll('section[id], footer').forEach(function (el) { obs.observe(el); });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', observar); else observar();
  }

  // ---- 3) Búsquedas ----
  var ultimaBusqueda = '';
  function registrarBusqueda(valor) {
    var v = String(valor || '').trim().toLowerCase();
    if (v.length < 2 || v === ultimaBusqueda) return;
    ultimaBusqueda = v;
    evento('busqueda', v);
  }
  var temporizadorBusqueda = null;
  document.addEventListener('input', function (e) {
    var el = e.target;
    if (!el || el.type !== 'search') return;
    clearTimeout(temporizadorBusqueda);
    temporizadorBusqueda = setTimeout(function () { registrarBusqueda(el.value); }, 1800);
  }, true);

  // ---- 4) Formularios ----
  var FORMULARIOS = { leadForm: 'Contacto', footerCatalogForm: 'Catálogo', popForm: 'Catálogo (ventana)', reviewForm: 'Reseña' };
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || !f.tagName) return;
    if (f.getAttribute('role') === 'search') {
      var inp = f.querySelector('input[type="search"], input[name="q"]');
      clearTimeout(temporizadorBusqueda);
      if (inp) registrarBusqueda(inp.value);
      return;
    }
    var nombre = FORMULARIOS[f.id];
    if (!nombre) return;
    var trampa = f.querySelector('#empresa_web, #catalogo_web, #resena_web');
    if (trampa && trampa.value) return; // robot
    var valido = true;
    try { valido = f.checkValidity(); } catch (err) {}
    if (valido) { evento('formulario', nombre); enviar(); }
  }, true);

  // ---- 5) Unidad de interés elegida ----
  document.addEventListener('change', function (e) {
    var el = e.target;
    if (el && el.id === 'segmento' && el.selectedIndex > 0) {
      evento('interes', (el.options[el.selectedIndex].text || el.value).split('—')[0]);
    }
  }, true);

  // ---- 6) Clics importantes ----
  var REDES = { 'facebook.com': 'Facebook', 'instagram.com': 'Instagram', 'tiktok.com': 'TikTok', 'youtube.com': 'YouTube',
    'linkedin.com': 'LinkedIn', 'x.com': 'X', 'twitter.com': 'X', 'maps.google.com': 'Google Maps', 'goo.gl': 'Google Maps' };
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('a, button, [data-track]') : null;
    if (!el) return;
    var marca = el.getAttribute('data-track');
    if (marca) { evento('clic', marca); return; }
    var href = el.getAttribute('href') || '';
    if (!href || href.charAt(0) === '#') return;
    if (/^mailto:/i.test(href)) return evento('clic', 'Correo');
    if (/^tel:/i.test(href)) return evento('clic', 'Llamada');
    var url;
    try { url = new URL(href, location.href); } catch (err) { return; }
    var host = url.hostname.replace(/^www\./, '');
    if (/(^|\.)wa\.me$|whatsapp\.com$/i.test(host)) return evento('clic', 'WhatsApp');
    if (/\.pdf($|\?)/i.test(url.pathname)) return evento('clic', 'PDF: ' + decodeURIComponent(url.pathname.split('/').pop() || 'archivo').slice(0, 80));
    if (/google\.[a-z.]+$/i.test(host) && /\/maps/i.test(url.pathname)) return evento('clic', 'Google Maps');
    if (host && host !== location.hostname.replace(/^www\./, '')) {
      var red = Object.keys(REDES).filter(function (k) { return host === k || host.slice(-k.length - 1) === '.' + k; })[0];
      evento('clic', red ? REDES[red] : 'Enlace: ' + host);
    }
  }, true);

  // ---- 7) Videos vistos con interés ----
  // Los videos del carrusel arrancan solos y en silencio, así que solo se cuenta
  // cuando alguien activa el sonido, le da play con sonido o pulsa el reproductor de Drive.
  var videosContados = {};
  function tituloVideo(el) {
    var slide = el.closest ? el.closest('.rv-media-slide, figure, article') : null;
    var cap = slide ? slide.querySelector('.rv-media-caption, figcaption, h3') : null;
    var t = (cap && cap.textContent) || el.getAttribute('title') || '';
    if (!t && el.currentSrc) { try { t = decodeURIComponent(el.currentSrc.split('/').pop().split('?')[0]); } catch (e) {} }
    return (t || 'Video').trim().slice(0, 100);
  }
  function contarVideo(el) {
    var t = tituloVideo(el);
    if (videosContados[t]) return;
    videosContados[t] = true;
    evento('video', t);
  }
  document.addEventListener('volumechange', function (e) {
    var v = e.target;
    if (v && v.tagName === 'VIDEO' && !v.muted && v.volume > 0) contarVideo(v);
  }, true);
  document.addEventListener('play', function (e) {
    var v = e.target;
    if (v && v.tagName === 'VIDEO' && !v.muted) contarVideo(v);
  }, true);
  window.addEventListener('blur', function () {
    setTimeout(function () {
      var el = document.activeElement;
      if (el && el.tagName === 'IFRAME' && /rv-media-embed|youtube|vimeo|drive\.google/.test(el.className + ' ' + (el.getAttribute('src') || ''))) contarVideo(el);
    }, 0);
  });

  // ---- 8) Tiempo en la página (solo tiempo con la pestaña visible) ----
  var visibleDesde = document.visibilityState === 'visible' ? Date.now() : 0, acumulado = 0;
  function cerrarTramo() {
    if (visibleDesde) { acumulado += Date.now() - visibleDesde; visibleDesde = 0; }
  }
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      cerrarTramo();
      var seg = Math.round(acumulado / 1000);
      if (seg >= 2) evento('salida', Math.min(seg, 7200));
      enviar();
    } else {
      visibleDesde = Date.now();
    }
  });
  window.addEventListener('pagehide', function () { enviar(); });
})();
