self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v2').then(function (cache) {
      return cache.addAll([
        '/',
        '/assets/136133c6ea2e29e457cea61fbbc06ad3.png',
        '/assets/1684e7734c5d8ec9cadf7455a0080948.png',
        '/assets/4bc26da37af251a2f6519a6d2d626c0d.png',
        '/assets/674f50d287a8c48dc19ba404d20fe713.eot',
        '/assets/912ec66d7572ff821749319396470bde.svg',
        '/assets/af7ae505a9eed503f8b8e6982036873e.woff2',
        '/assets/app7ee84f5555674abf8c9a.js',
        '/assets/b06871f281fee6b241d60582ae9369b9.ttf',
        '/assets/bac1b84f104982bf6441cabc14a05d43.png',
        '/assets/bf46dd512e3a7355ccbfc99204618dc6.png',
        '/assets/fee66e712a8a08eef5805a46892932ad.woff'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    // This is a case caused by devtools, no worries
    return;
  }

  if (fetch) {
    event.respondWith(
      fetch(event.request).catch(function () {
        console.log('network is in offline state, trying to providing cached offline content for:', event.request.url);
        // Only use cache as a fallback
        return caches.open('v2').then(cache => {
          return cache.match(event.request).then(response => {
            return response;
          })
        });
      })
    );
  }
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
