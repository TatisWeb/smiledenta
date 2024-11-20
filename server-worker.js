const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/stylenewland.css',
  '/js/newland.js'
];

// Установка service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      console.log('Service Worker: Кэшируются файлы');
      return cache.addAll(urlsToCache);
    })
    .catch(error => {
      console.error('Ошибка кэширования файлов:', error);
    })
  );
});

// Активация service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
    .then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Удаляем устаревший кэш:', key);
            return caches.delete(key);
          }
        })
      )
    })
    .then(() => {
      console.log('Service Worker: Активирован');
    })
  );
});

// Получение данных из сети или кеша
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      return response || fetch(event.request);
    })
    .catch(() => {
      return caches.match('/offline.html');
    })
  );
});