const express = require('express')
const app = express()
require('dotenv').config()
const { startServer } = require('./config/server.config')
const { userRoutes } = require('./routes/user.routes')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', userRoutes)

startServer(app)
