// PPL Coach — Service Worker v3
// Stratégie : NE JAMAIS mettre le HTML en cache → toujours la version fraîche
// Seules les polices Google sont mises en cache (elles ne changent pas)

const CACHE = 'ppl-coach-fonts-v1';
const FONT_CACHE = [
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(FONT_CACHE).catch(function() {});
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  // HTML → toujours réseau, jamais cache
  if (url.endsWith('.html') || url.endsWith('/') || url.indexOf('workout') !== -1) {
    e.respondWith(
      fetch(e.request).catch(function() {
        return caches.match(e.request);
      })
    );
    return;
  }

  // Polices → cache first
  if (url.indexOf('fonts.googleapis.com') !== -1 || url.indexOf('fonts.gstatic.com') !== -1) {
    e.respondWith(
      caches.match(e.request).then(function(cached) {
        return cached || fetch(e.request).then(function(response) {
          var clone = response.clone();
          caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); });
          return response;
        });
      })
    );
    return;
  }

  // Tout le reste → réseau
  e.respondWith(fetch(e.request).catch(function() {
    return caches.match(e.request);
  }));
});
