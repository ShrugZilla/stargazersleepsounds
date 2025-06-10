
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('stargazer').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './assets/wind.mp3',
        './assets/thunder.mp3',
        './assets/roof-rain.mp3',
        './icons/icon-192.png',
        './icons/icon-512.png'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
