const express = require('express')
const path = require('path')
const mime = require('mime-types')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    res.setHeader('Content-Type', mime.lookup(filePath) || 'application/octet-stream');
  }
}))

app.use('/css', express.static(path.join(__dirname, 'static', 'css'), {
  setHeaders: (res, filePath) => {
    res.setHeader('Content-Type', 'text/css');
  }
}))

app.use('/js', express.static(path.join(__dirname, 'static', 'js'), {
  setHeaders: (res, filePath) => {
    res.setHeader('Content-Type', 'application/javascript');
  }
}))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
