(function () {
// 1. Mock global para evitar "Cannot read properties of undefined (reading 'miniProgram')"
if (typeof window !== 'undefined') {
  window.Telegram = window.Telegram || {};
  window.Telegram.WebApp = window.Telegram.WebApp || {};
  if (!window.Telegram.WebApp.miniProgram) {
    window.Telegram.WebApp.miniProgram = {};
  }
}

// 2. Interceptor global para silenciar Unhandled Rejections de miniProgram y SSE Binance
window.addEventListener('unhandledrejection', function (event) {
  var reason = event.reason ? event.reason.toString() : '';
  var stack = event.reason && event.reason.stack ? event.reason.stack : '';

  if (
    reason.indexOf('miniProgram') !== -1 ||
    stack.indexOf('miniProgram') !== -1 ||
    reason.indexOf('wallet.binance.com') !== -1 ||
    (event.reason && event.reason.url && event.reason.url.indexOf('tonbridge') !== -1)
  ) {
    event.preventDefault(); // Cancela la propagación del error a la consola
    console.warn('[Patch Applied] Error no controlado interceptado y silenciado.');
  }
});

// 3. Control de reconexión bucle SSE (EventSource Patch)
var NativeEventSource = window.EventSource;
if (NativeEventSource) {
  window.EventSource = function (url, config) {
    if (typeof url === 'string' && url.indexOf('wallet.binance.com/tonbridge') !== -1) {
      console.warn('[Patch Applied] Bloqueada la reconexión bucle a Binance SSE.');
      // Retorna un objeto simulado inofensivo para evitar reintentos que crasheen el app
      return {
        addEventListener: function () {},
        removeEventListener: function () {},
        close: function () {},
        onerror: null,
        onopen: null,
        onmessage: null
      };
    }
    return new NativeEventSource(url, config);
  };
}

// 4. Prevenir que el navegador recuerde scroll o salte al medio de la página
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
if (window.location.hash) {
  try {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  } catch (e) {}
}
})();
