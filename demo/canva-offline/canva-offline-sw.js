const cacheName = 'canva-offline-demo';
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        '/demo/canva-offline/canva-offline.html',
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
          cache.match(new Request('/demo/canva-offline/canva-offline.html')).then(response =>
            response || Promise.reject('no-match')
          )
        )
      )
  );
});
