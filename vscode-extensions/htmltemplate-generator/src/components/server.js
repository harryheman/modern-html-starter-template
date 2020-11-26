export default `
const app = require('express')()
const cors = require('cors')
const helmet = require('helmet')

app.use(cors())
app.use(helmet())

app.use((req, res) => {
  // security
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self';")

  // for production only
  // res.setHeader('Content-Encoding', 'br', 'gzip', 'deflate')

  res.setHeader('Cache-Control', 'no-cache')
  // for production only
  // res.setHeader('Cache-Control', 'max-age=31536000')

  res.sendFile(__dirname + decodeURIComponent(req.url))
})

app.listen(process.env.PORT || 1234)
`
