self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('sleep-sound-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './roof-rainfall-ambient-drizzle-in-nature-335712.mp3',
        './thunderstorm-ambiance-191991.mp3',
        './wind.mp3',
        './icon-192.png',
        './icon-512.png'
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