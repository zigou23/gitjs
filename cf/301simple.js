addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  url.hostname = 'google.com';
  const request = new Request(url, event.request);
  event.respondWith(fetch(request));
});
