
const CACHE_NAME = 'jeu-cache-v9';  // Change ce nom pour le versionner si nécessaire
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/audio-list.json'  // Ajout du fichier audio-list.json dans les assets à mettre en cache
];

// 🔹 Installation du Service Worker : mise en cache des fichiers statiques
self.addEventListener('install', (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(ASSETS);
            
            // 🔥 Récupérer la liste des fichiers audio depuis le fichier audio-list.json
            try {
                const response = await fetch('/audio-list.json');  // URL du fichier JSON avec la liste des audios
                const data = await response.json();
                const audioFiles = data.audios || [];

                // 🔹 Mise en cache des fichiers audio
                for (const file of audioFiles) {
                    try {
                        await cache.add(file);
                        console.log(`✅ Fichier mis en cache : ${file}`);
                    } catch (err) {
                        console.warn(`⚠️ Erreur avec le fichier : ${file} - ${err.message}`);
                    }
                }
            } catch (err) {
                console.warn("⚠️ Impossible de récupérer la liste des fichiers audio", err);
            }

            self.skipWaiting();
        })()
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
    console.log("✅ Service Worker activé et cache nettoyé !");
});

// 🔹 Gestion des requêtes : récupérer depuis le cache ou effectuer une requête réseau
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
