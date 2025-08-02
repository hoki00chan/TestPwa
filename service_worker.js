var CACHE_NAME = 'viet-app-sample';
var urlsToCache = ['./index.html']

// インストール処理
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('image-viewer-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './site.webmanifest',
        './icon/web-app-manifest-192x192.png',
        './icon/web-app-manifest-512x512.png',
        './images/IMG_5481.JPG',
        './images/IMG_5504.JPG',
        './images/IMG_5508.JPG',
        './images/IMG_5509.JPG',
        './images/IMG_5552.JPG',
        './images/IMG_5554.JPG',
        './images/IMG_5558.JPG',
        './images/IMG_5586.JPG',
        './images/IMG_5591.JPG',
        './images/IMG_5599.JPG',
        './images/IMG_5645.JPG',
        './images/IMG_5662.JPG',
        './images/IMG_5666.JPG',
        './images/IMG_5704.JPG',
        './images/IMG_5729.JPG',
        './images/IMG_5730.JPG',
        './images/IMG_5738.JPG'
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