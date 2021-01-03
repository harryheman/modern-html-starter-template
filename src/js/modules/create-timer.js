export function createTimer() {
  const timeEl = document.querySelector('time')
  setInterval(() => {
    const currentTime = new Date().toLocaleTimeString()
    timeEl.textContent = currentTime
  }, 1000)
}
