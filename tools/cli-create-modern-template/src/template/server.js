const app = require('express')()
const cors = require('cors')
const helmet = require('helmet')
const prerender = require('prerender-node')

app.use(cors())
app.use(helmet())
app.use(prerender)

app.use((req, res) => {
  // Security
  res.setHeader('X-Frame-Options', 'sameorigin')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self'")
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('Referrer-Policy', 'strict-origin')
  res.setHeader(
    'Permissions-Policy',
    'camera=(), geolocation=(), microphone=()'
  )

  res.setHeader('Cache-Control', 'max-age=31536000')

  res.sendFile(__dirname + decodeURIComponent(req.url))
})

app.listen(process.env.PORT || 1234)
