(function(){
  function note(){ alert('This is a demonstration website created by Unifotec. Orders, payments and form submissions are disabled.'); }
  var of = window.fetch; if (of) { window.fetch = function(u, o){ var m = ((o && o.method) || 'GET').toUpperCase(); if (m !== 'GET') { note(); return Promise.reject(new Error('Disabled in demo')); } return of.apply(this, arguments); }; }
  if (navigator.sendBeacon) { navigator.sendBeacon = function(){ return false; }; }
  document.addEventListener('click', function(e){ var t = e.target && e.target.closest ? e.target.closest('[href*=paystack],[href*=flutterwave],[href*=paypal],[href*=stripe]') : null; if (t) { e.preventDefault(); note(); } }, true);
})();