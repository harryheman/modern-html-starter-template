// Modules
import Loader from './modules/loader.js'
import { createTimer } from './modules/create-timer.js'
import { assets } from './assets/index.js'

function App() {
  Loader.show()

  createTimer()

  const template = `
  <section>
    <h2>Includes</h2>
    <ul>
      ${assets.reduce((html, item) => (html += `<li>${item}</li>`), '')}
    </ul>
  </section>
  `

  const main = document.querySelector('main')
  main.innerHTML = template

  const timer = setTimeout(() => {
    Loader.hide()
    clearTimeout(timer)
  }, 2000)
}

App()
