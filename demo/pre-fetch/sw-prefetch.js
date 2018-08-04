const cacheName = 'pre-fetch-demo';
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        '/demo/pre-fetch/page1/',
        '/demo/pre-fetch/page1/main.js',
        '/demo/pre-fetch/page2/'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request)
      .catch(() =>
        // Use cache as a fallback
        caches.open(cacheName).then(cache =>
          cache.match(event.request).then(response =>
            response || Promise.reject('no-match')
          )
        )
      )
  );
});
