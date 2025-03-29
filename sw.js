
const CACHE_NAME = 'jeu-cache-v9'; // Mise à jour du cache
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/audio-list.json' // Ajout du fichier JSON contenant la liste des audios
];

// 🔹 Installation du Service Worker : mise en cache des fichiers statiques
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        }).then(() => {
            console.log("✅ Cache initialisé !");
            self.skipWaiting();
        })
    );
});

// 🔹 Activation : Nettoyage des anciens caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
    console.log("✅ Service Worker activé et anciens caches supprimés !");
});

// 🔹 Interception des requêtes et mise en cache des fichiers audio depuis audio-list.json
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (url.pathname === '/audio-list.json') {
        event.respondWith(
            caches.match('/audio-list.json').then(response => {
                return response || fetch(event.request);
            })
        );
    }

    // Mise en cache des audios à partir de la liste JSON
    if (url.pathname.startsWith('/audios/')) {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(event.request).then(response => {
                    if (response) {
                        return response;
                    } else {
                        return fetch(event.request).then(networkResponse => {
                            // Clone the response to cache it
                            const clonedResponse = networkResponse.clone();
                            cache.put(event.request, clonedResponse);
                            return networkResponse;
                        });
                    }
                });
            })
        );
    }

    // Autres fichiers statiques (non audio)
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
