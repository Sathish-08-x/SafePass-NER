const CACHE_NAME = 'ner-offline-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './login.html',
    './signup.html',
    './style.css',
    '../storage/database.js',
    './script.js',
    './lib/maplibre-gl.css',
    './lib/maplibre-gl.js',
    './lib/lucide.min.js',
    'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((k) => {
                    if (k !== CACHE_NAME) {
                        return caches.delete(k);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);
    if (url.origin === location.origin || url.hostname.includes('unpkg.com') || url.hostname.includes('tailwindcss.com')) {
        e.respondWith(
            caches.match(e.request).then((cached) => {
                if (cached) return cached;
                return fetch(e.request).then((networkRes) => {
                    if (networkRes && networkRes.status === 200) {
                        const resClone = networkRes.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
                    }
                    return networkRes;
                }).catch(() => {
                    if (e.request.headers.get('accept') && e.request.headers.get('accept').includes('text/html')) {
                        return caches.match('./index.html');
                    }
                });
            })
        );
    } else {
        e.respondWith(
            fetch(e.request).catch(() => {
                return caches.match(e.request);
            })
        );
    }
});
