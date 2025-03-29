const CACHE_NAME = 'jeu-cache-v10'; // 🔥 Change de version pour forcer la mise en cache
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(ASSETS);

            // Charger les fichiers audio depuis audio-list.json
            try {
                const response = await fetch('/audio-list.json');
                const data = await response.json();
                const audioFiles = data.audios;

                for (const file of audioFiles) {
                    try {
                        await cache.add(file);
                        console.log(`✅ Fichier audio mis en cache : ${file}`);
                    } catch (err) {
                        console.warn(`⚠️ Erreur avec : ${file} - ${err.message}`);
                    }
                }
            } catch (err) {
                console.warn("⚠️ Impossible de récupérer la liste des fichiers audio depuis audio-list.json", err);
            }

            self.skipWaiting();
        })()
    );
});

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

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});