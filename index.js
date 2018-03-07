var express = require('express')
var compression = require('compression')
const path = require('path')
// var history = require('connect-history-api-fallback');
var app = express()
app.use(compression())

const port = process.env.PORT || 5000
app.set('port', port)

app.use(express.static(path.join(__dirname, '/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

app.listen(port)
