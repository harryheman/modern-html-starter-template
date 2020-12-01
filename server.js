const app = require('express')()
const cors = require('cors')
const helmet = require('helmet')

app.use(cors())
app.use(helmet())

app.use((req, res) => {
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self'")

  res.setHeader('Cache-Control', 'max-age=31536000')

  res.sendFile(__dirname + decodeURIComponent(req.url))
})

app.listen(process.env.PORT || 1234)
