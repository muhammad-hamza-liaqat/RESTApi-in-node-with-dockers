const express = require('express')
const app = express()
require('dotenv').config()
const { startServer } = require('./config/server.config')
const routes = require('./routes/index.routes')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

startServer(app)
