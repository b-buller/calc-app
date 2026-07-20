const CACHE = "calc-v5"; // bump on every deploy or cached shell never updates
// shell + module entrypoints; fonts/chunks get cached on first load by the fetch handler
const SHELL = [
  "./", "index.html", "manifest.webmanifest", "icon.svg",
  "vendor/mathlive/mathlive.mjs",
  "vendor/compute-engine/compute-engine.js",
  "vendor/compute-engine/chunks/chunk-JE4S5AYO.js",
  "vendor/compute-engine/chunks/chunk-M7YSSVZQ.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// cache-first: static app shell, works fully offline
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match("index.html")))
  );
});
