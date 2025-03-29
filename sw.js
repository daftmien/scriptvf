
const CACHE_NAME = 'jeu-cache-v8'; // 🔥 Change le nom du cache pour forcer le navigateur à l'utiliser
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json'
];

self.addEventListener('install', (event) => {
    // Forcer l'activation immédiate du SW
    self.skipWaiting();  // Ignore la phase de "waiting" et passe directement à "activate"
    
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        }).then(() => {
            console.log("✅ Cache initialisé !");
        })
    );
});

self.addEventListener('activate', (event) => {
    // Supprimer les anciens caches
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        }).then(() => self.clients.claim())  // Prendre immédiatement le contrôle des pages ouvertes
    );
    console.log("✅ Service Worker activé et caches nettoyés !");
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
