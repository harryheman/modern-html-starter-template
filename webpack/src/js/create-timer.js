export function createTimer() {
  const $time = document.querySelector('time')
  setInterval(() => {
    const currentTime = new Date().toLocaleTimeString()
    $time.textContent = currentTime
  }, 1000)
}
