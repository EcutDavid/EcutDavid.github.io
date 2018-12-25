const cacheName = 'v2';
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        '/',
        '/assets/136133c6ea2e29e457cea61fbbc06ad3.png',
        '/assets/1684e7734c5d8ec9cadf7455a0080948.png',
        '/assets/4bc26da37af251a2f6519a6d2d626c0d.png',
        '/assets/674f50d287a8c48dc19ba404d20fe713.eot',
        '/assets/912ec66d7572ff821749319396470bde.svg',
        '/assets/af7ae505a9eed503f8b8e6982036873e.woff2',
        '/assets/appf3840e443d8c83fc915b.js',
        '/assets/b06871f281fee6b241d60582ae9369b9.ttf',
        '/assets/bac1b84f104982bf6441cabc14a05d43.png',
        '/assets/bf46dd512e3a7355ccbfc99204618dc6.png',
        '/assets/fee66e712a8a08eef5805a46892932ad.woff'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (!fetch) return;
  // Don't care about analytic stuff when the user it's offline.
  // For now... :)
  if (event.request.url.indexOf('analytics') > -1) return;
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    // This is a case caused by devtools, no worries
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response =>
        caches.open(cacheName).then(cache =>
          cache.put(event.request, response.clone())
        ).then(() => response)
      )
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

self.addEventListener('activate', function (event) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
  // The claim() method of the Clients allows an active service worker
  // to set itself as the controller for all clients within its scope.
  // This triggers a "controllerchange" event on navigator.serviceWorker
  // in any clients that become controlled by this service worker.
  if (self.clients && self.clients.claim) {
    event.waitUntil(self.clients.claim());
  }
});
