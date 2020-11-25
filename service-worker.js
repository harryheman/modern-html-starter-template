const NAME = 'html-template-v1'

const FILES = [
  './index.html',
  './404.html',
  './css/style.css',
  './css/modules/footer.css',
  './css/modules/header.css',
  './css/modules/loader.css',
  './css/modules/main.css',

  './script.js',
  './server.js',
  './service-worker.js',
  './js/src/assets.js',
  './js/modules/create-timer.js',
  './js/modules/loader.js',

  './icons/64x64.png',
  './icons/128x128.png',
  './icons/150x150.png',
  './icons/256x256.png',
  './icons/512x512.png',
]

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(NAME).then((cache) => cache.addAll(FILES)))
  self.skipWaiting()
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== NAME) {
            return caches.delete(key)
          }
        })
      )
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then(
        (response) =>
          response ||
          fetch(e.request).then((response) =>
            caches.open(NAME).then((cache) => {
              if (e.request.method === 'GET') {
                cache.put(e.request, response.clone())
              }
              return response
            })
          )
      )
      .catch(() => caches.match('./404.html'))
  )
})
