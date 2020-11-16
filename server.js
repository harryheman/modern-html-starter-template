const app = require('express')()
const cors = require('cors')
const helmet = require('helmet')

app.use(cors())
app.use(helmet())

app.use((req, res) => {
  res.setHeader('X-Frame-Options', 'sameorigin')
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self';")
  res.setHeader('Accept-Encoding', 'gzip, compress, br')
  res.sendFile(__dirname + decodeURIComponent(req.url))
})

app.listen(process.env.PORT || 1234)
