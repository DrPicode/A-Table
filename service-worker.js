const CACHE_NAME = 'a-table-v20';
const APP_VERSION = CACHE_NAME.replace('a-table-', '');
const APP_FILES = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('message', (event) => {
  if (event.data === 'version' && event.ports[0]) event.ports[0].postMessage(APP_VERSION);
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(caches.open(CACHE_NAME).then((cache) => fetch(event.request).then((response) => {
    if (response.ok) cache.put(event.request, response.clone());
    return response;
  }).catch(() => cache.match(event.request).then((cached) => cached || cache.match('./index.html')))));
});
