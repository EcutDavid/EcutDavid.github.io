self.addEventListener('fetch', function (event) {
  // Only return what's being fetched for now
  // Figure out how to handle stuff in the right way later
  if (fetch) {
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
      // This is a case caused by devtools, no worries
      return;
    }
    console.log(event.request);
    event.respondWith(fetch(event.request));
  }
});
