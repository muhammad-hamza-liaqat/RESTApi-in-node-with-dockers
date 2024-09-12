const express = require('express')
const routes = express.Router()
const publicRoutes = require('./publicRoutes/index.routes')

routes.use('/', publicRoutes)

module.exports = routes
