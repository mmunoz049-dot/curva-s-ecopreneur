// Guarda la app para abrirla sin conexión. datos.json siempre se busca primero en la red.
const CACHE = 'curva-s-v3';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const fresh = url.origin === location.origin && (url.pathname.endsWith('datos.json') || url.pathname.endsWith('sw.js') || req.mode === 'navigate' || url.pathname.endsWith('index.html'));
  if (fresh) { e.respondWith(fetch(req, {cache: 'no-store'}).then(r => { const c = r.clone(); caches.open(CACHE).then(k => k.put(req, c)); return r; }).catch(() => caches.match(req))); return; }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok && (url.origin === location.origin || url.hostname.endsWith('gstatic.com') || url.hostname.endsWith('googleapis.com'))) { const c = r.clone(); caches.open(CACHE).then(k => k.put(req, c)); } return r; })));
});
