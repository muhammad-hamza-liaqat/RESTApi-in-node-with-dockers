const express = require('express')
const routes = express.Router()
const authToken = require('../middleware/auth')

const protectedRoutes = require('./protectedRoutes/index.routes')
const publicRoutes = require('./publicRoutes/index.routes')

routes.use(publicRoutes)
routes.use(authToken)
routes.use(protectedRoutes)

module.exports = routes
