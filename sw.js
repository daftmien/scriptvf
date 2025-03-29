
const CACHE_NAME = 'jeu-cache-v9'; // Nom du cache à changer à chaque version
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/audio-list.json'  // Le fichier JSON contenant la liste des audios
];

// 🔹 Installation du Service Worker : mise en cache des fichiers statiques
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        }).then(() => {
            console.log("✅ Cache initialisé avec succès !");
            self.skipWaiting();
        }).catch((err) => {
            console.warn("⚠️ Erreur lors de l'ajout des fichiers au cache :", err);
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
        }).then(() => {
            self.clients.claim();
            console.log("✅ Service Worker activé et anciens caches supprimés !");
        }).catch((err) => {
            console.warn("⚠️ Erreur lors de l'activation du Service Worker :", err);
        })
    );
});

// 🔹 Interception des requêtes
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                // Si la réponse est en cache, la renvoyer
                return response;
            } else {
                // Sinon, faire une requête réseau
                return fetch(event.request).then((networkResponse) => {
                    // Mettre à jour le cache avec la réponse réseau pour la prochaine fois
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                    });
                    return networkResponse;
                });
            }
        }).catch((err) => {
            console.warn("⚠️ Erreur lors de la récupération des fichiers :", err);
        })
    );
});

// 🔹 Gestion de la mise en cache des fichiers audio
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (url.pathname.endsWith('.mpga')) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((response) => {
                    return response || fetch(event.request).then((networkResponse) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
    }
});
