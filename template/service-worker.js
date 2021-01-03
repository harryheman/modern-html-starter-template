const NAME = 'htmltemplate-v2.0.1'

const FILES = [
  './index.html',

  './server.js',

  './src/404.html',
  './src/css/style.css',
  './src/css/modules/footer.css',
  './src/css/modules/header.css',
  './src/css/modules/loader.css',
  './src/css/modules/main.css',

  './src/js/script.js',
  './src/js/assets/index.js',
  './src/js/modules/create-timer.js',
  './src/js/modules/loader.js',

  './img/logo.png',
  './img/icons/64x64.png',
  './img/icons/70x70.png',
  './img/icons/128x128.png',
  './img/icons/150x150.png',
  './img/icons/256x256.png',
  './img/icons/310x150.png',
  './img/icons/310x310.png',
  './img/icons/512x512.png',
  './img/icons/600x600.png'
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
      .catch(() => caches.match('./src/404.html'))
  )
})
