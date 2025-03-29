const CACHE_NAME = 'jeu-cache-v3'; // 🔥 Change le nom du cache pour forcer le navigateur à l'utiliser
const ASSETS = [
    '/',
    '/index.html',
    '/script.js',
    '/manifest.json' // 🔥 Suppression de /styles.css car il n'existe pas
];

// 🔹 Installation du Service Worker : mise en cache des fichiers statiques
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return Promise.all(
                ASSETS.map(url =>
                    fetch(url, { cache: "no-store" })
                        .then(response => {
                            if (!response.ok) throw new Error(`Erreur de chargement : ${url}`);
                            return cache.put(url, response);
                        })
                        .catch(err => console.warn(`⚠️ Impossible de mettre en cache ${url}:`, err))
                )
            );
        })
    );
    self.skipWaiting();
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
    console.log("✅ Service Worker activé et cache nettoyé !");
});

// 🔹 Gestion de IndexedDB pour stocker les fichiers audio
function getFromDB(requestUrl) {
    return new Promise((resolve, reject) => {
        const openRequest = indexedDB.open("audio-cache", 1);
        openRequest.onupgradeneeded = () => {
            const db = openRequest.result;
            if (!db.objectStoreNames.contains("audios")) {
                db.createObjectStore("audios");
            }
        };
        openRequest.onerror = () => reject("Erreur d'ouverture de IndexedDB");
        openRequest.onsuccess = () => {
            const db = openRequest.result;
            const transaction = db.transaction("audios", "readonly");
            const store = transaction.objectStore("audios");
            const request = store.get(requestUrl);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Audio introuvable dans IndexedDB");
        };
    });
}

// 🔹 Interception des requêtes
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // 🔥 Si la requête concerne un fichier audio, on la stocke dans IndexedDB et le cache
    if (url.pathname.endsWith('.mpga') || url.pathname.endsWith('.mp3')) {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(event.request).then(response => {
                    return response || fetch(event.request).then(networkResponse => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
        return;
    }

    // 🔹 Gestion classique du cache pour les autres fichiers
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
