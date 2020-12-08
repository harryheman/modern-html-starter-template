const NAME = 'htmltemplate-v2'

const FILES = [
  './index.html',
  './public/404.html',
  './public/css/style.css',
  './public/css/modules/footer.css',
  './public/css/modules/header.css',
  './public/css/modules/loader.css',
  './public/css/modules/main.css',

  './public/js/script.js',
  './server.js',
  './service-worker.js',
  './sw-register.js',
  './public/js/assets/assets.js',
  './public/js/modules/create-timer.js',
  './public/js/modules/loader.js',

  './public/icons/64x64.png',
  './public/icons/128x128.png',
  './public/icons/150x150.png',
  './public/icons/256x256.png',
  './public/icons/512x512.png'
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
      .catch(() => caches.match('./public/404.html'))
  )
})
