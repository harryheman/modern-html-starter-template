export default ((B) => ({
  show() {
    const template = `
    <div id="loader">
      <h3>Loading...</h3>
    </div>
    `
    B.insertAdjacentHTML('beforeend', template)
    B.style.overflow = 'hidden'
  },
  hide() {
    B.style.overflow = 'auto'
    document.getElementById('loader').remove()
  },
}))(document.body)
