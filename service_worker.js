// インストール処理
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('image-viewer-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './icon/site.webmanifest',
        './icon/web-app-manifest-192x192.png',
        './icon/web-app-manifest-512x512.png',
        './Images/IMG_5481.JPG',
        './Images/IMG_5504.JPG',
        './Images/IMG_5508.JPG',
        './Images/IMG_5509.JPG',
        './Images/IMG_5552.JPG',
        './Images/IMG_5554.JPG',
        './Images/IMG_5558.JPG',
        './Images/IMG_5586.JPG',
        './Images/IMG_5591.JPG',
        './Images/IMG_5599.JPG',
        './Images/IMG_5645.JPG',
        './Images/IMG_5662.JPG',
        './Images/IMG_5666.JPG',
        './Images/IMG_5704.JPG',
        './Images/IMG_5729.JPG',
        './Images/IMG_5730.JPG',
        './Images/IMG_5738.JPG'
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