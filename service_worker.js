// インストール処理
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('image-viewer-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './Images/sample1.jpg',
        './Images/sample2.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});