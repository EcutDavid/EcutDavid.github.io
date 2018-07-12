const cacheName = 'pre-fetch-demo';
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        '/demo/pre-fetch/'
      ]);
    })
  );
});

// self.addEventListener('fetch', function (event) {
//   if (!fetch) return;
//   // Don't care about analytic stuff when the user it's offline.
//   // For now... :)
//   if (event.request.url.indexOf('analytics') > -1) return;
//   if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
//     // This is a case caused by devtools, no worries
//     return;
//   }

//   event.respondWith(
//     fetch(event.request)
//       .then(response =>
//         caches.open(cacheName).then(cache =>
//           cache.put(event.request, response.clone())
//         ).then(() => response)
//       )
//       .catch(() =>
//         // Use cache as a fallback
//         caches.open(cacheName).then(cache =>
//           cache.match(event.request).then(response =>
//             response || Promise.reject('no-match')
//           )
//         )
//       )
//   );
// });
