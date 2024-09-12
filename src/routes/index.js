const express = require('express')
const routes = express.Router()
const authToken = require('../middleware/auth')
const authorizeUserOnly = require('../middleware/authorizeRoles')

const protectedRoutes = require('./protectedRoutes/index.routes')
const publicRoutes = require('./publicRoutes/index.routes')
const adminRoutes = require('./adminRoutes/index.routes')

routes.use(publicRoutes)
routes.use(authToken)
routes.use(protectedRoutes)

// middleware applied to admin for role base
routes.use(authorizeUserOnly)
routes.use(adminRoutes)

module.exports = routes
