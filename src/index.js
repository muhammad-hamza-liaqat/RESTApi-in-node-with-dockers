const express = require('express')
const app = express()
require('dotenv').config()
const { startServer } = require('./config/server.config')
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


startServer(app)
