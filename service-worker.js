const CACHE_NAME = "stargazer-cache-v1";
const urlsToCache = [
  "/stargazersleepsounds/",
  "/stargazersleepsounds/index.html",
  "/stargazersleepsounds/manifest.json",
  "/stargazersleepsounds/icon-192.png",
  "/stargazersleepsounds/icon-512.png",
  "/stargazersleepsounds/roof-rainfall-ambient-drizzle-in-nature-335712.mp3",
  "/stargazersleepsounds/thunderstorm-ambiance-191991.mp3",
  "/stargazersleepsounds/wind.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
