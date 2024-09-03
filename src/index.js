const express = require('express')
const app = express()
require('dotenv').config()
const { indexRoutes } = require('./routes/index.routes')
const { startServer } = require('./config/server.config')

app.use('/', indexRoutes)

startServer(app);
