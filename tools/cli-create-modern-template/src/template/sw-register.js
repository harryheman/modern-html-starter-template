navigator.serviceWorker
  .register('./service-worker.js')
  .catch((er) => console.error(er))
