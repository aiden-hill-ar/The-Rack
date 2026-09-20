/* const VERSION = 'v1';
const CACHE_NAME = `The-Rack-${VERSION}`;

const APP_STATIC_RESOURCES = ['./', './index.html', './manifest.json', './pages/calculator.html', './pages/tally.html', './css/the-rack.css', './css/calculator.css', './css/tally.css', './css/mini/mini-calculator.css', './css/calculator.js', './js/random-color.js', './js/calculator.js', './js/tally.js', './svg/squiggly-line.svg', './fonts/Hanuman-Variable.ttf'];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
          return undefined;
        }),
      );
      await clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  // when seeking an HTML page
  if (event.request.mode === "navigate") {
    // Return to the index.html page
    event.respondWith(caches.match("./"));
    return;
  }

  // For every other request type
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request.url);
      if (cachedResponse) {
        // Return the cached response if it's available.
        return cachedResponse;
      }
      // Respond with an HTTP 404 response status.
      return new Response(null, { status: 404 });
    })(),
  );
}); */