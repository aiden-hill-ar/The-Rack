const CACHE = 'my-pwa-v1';
const ASSETS = ['/', '/index.html', '/pages/calculator.html', '/pages/tally.html', '/styles/the-rack.css', '/styles/calculator.css', '/styles/tally.css', '/styles/nav.css', '/styles/mini/mini-calculator.css', '/scripts/calculator.js', '/scripts/nav.js', '/scripts/random-color.js', '/svg/the-rack.svg', '/svg/calculator.svg', '/svg/squiggly-line.svg', '/png/the-rack-192.png', '/png/the-rack-512.png', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});   