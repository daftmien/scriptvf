
const DB_NAME = 'jeu-audio-db';
const STORE_NAME = 'audioFiles';

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

function saveToDB(key, value) {
    return initDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.put(value, key);

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    });
}

function getFromDB(key) {
    return initDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(STORE_NAME, 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(key);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    });
}

async function getAudioFilesList() {
    try {
        const response = await fetch('/audios/files.json');
        const files = await response.json();
        return files.audioFiles;
    } catch (error) {
        console.error('Impossible de récupérer la liste des fichiers audio', error);
        return [];
    }
}

async function preloadAndStoreAllAudio() {
    const audioFiles = await getAudioFilesList();
    preloadAndStoreAudio(audioFiles);
}

window.addEventListener('load', () => {
    preloadAndStoreAllAudio();
});
