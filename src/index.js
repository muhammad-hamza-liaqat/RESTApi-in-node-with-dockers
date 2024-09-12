const express = require('express')
const app = express()
require('dotenv').config()
const { startServer } = require('./config/server.config')
const routes = require('./routes/index')
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url)
  next()
})

app.use('/api', routes)

startServer(app)
