const express = require('express')
const app = express()
require('dotenv').config()
const { startServer } = require('./config/server.config')
const { userRoutes } = require('./routes/user.routes')

app.use('/', userRoutes)

startServer(app);
