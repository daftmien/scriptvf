const CACHE_NAME = 'jeu-cache-v2';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return Promise.all(
                ASSETS.map(url => 
                    fetch(url, { cache: "no-store" })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Erreur de chargement : ${url}`);
                            }
                            return cache.put(url, response);
                        })
                        .catch(err => console.warn(`⚠️ Impossible de mettre en cache ${url}: `, err))
                )
            );
        })
    );
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Vérifie si la requête concerne un fichier audio et la redirige vers IndexedDB
    if (url.pathname.startsWith('/audios/')) {
        event.respondWith(
            getFromDB(event.request.url).then((dataUrl) => {
                if (dataUrl) {
                    return new Response(dataUrl, { headers: { 'Content-Type': 'audio/mpeg' } });
                }
                return fetch(event.request);
            }).catch(() => fetch(event.request))
        );
    } else {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        }).then(() => {
            return self.clients.claim();
        })
    );

    // 🔥 Forcer tous les onglets ouverts à utiliser le nouveau SW immédiatement
    self.clients.matchAll({ includeUncontrolled: true }).then(clients => {
        clients.forEach(client => client.navigate(client.url));
    });

    console.log("✅ Service Worker activé avec succès !");
});
