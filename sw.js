
const CACHE_NAME = 'jeu-cache-v8'; // 🔥 Auto-ajout des fichiers audio
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
            
            // Récupérer dynamiquement tous les fichiers audio depuis le fichier JSON
            try {
                const response = await fetch('/audio-list.json'); // URL du fichier JSON contenant les audios
                const data = await response.json();
                const audioFiles = data.audios; // Liste des fichiers audio

                for (const file of audioFiles) {
                    const fileURL = new URL(file, location.origin); // Crée une URL complète
                    try {
                        const audioResponse = await fetch(fileURL); // Essayer de récupérer le fichier audio
                        if (audioResponse.ok) {
                            await cache.put(fileURL, audioResponse.clone()); // Si valide, mettre en cache
                            console.log(`✅ Fichier mis en cache : ${file}`);
                        } else {
                            console.warn(`⚠️ Impossible de récupérer : ${file}`);
                        }
                    } catch (err) {
                        console.warn(`⚠️ Erreur de téléchargement pour : ${file} - ${err.message}`);
                    }
                }
            } catch (err) {
                console.warn("⚠️ Impossible de récupérer la liste des fichiers audio automatiquement", err);
            }
            
            self.skipWaiting(); // Passer directement au worker actif
        })()
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)) // Nettoyage des anciens caches
            );
        }).then(() => self.clients.claim())
    );
    console.log("✅ Service Worker activé et cache nettoyé !");
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request); // Retourner le cache ou récupérer via le réseau
        })
    );
});
