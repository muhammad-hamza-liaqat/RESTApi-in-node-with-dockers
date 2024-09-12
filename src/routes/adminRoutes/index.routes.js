const express = require('express')
const routes = express.Router()
const { adminRoutes } = require('./admin.routes')

routes.use("/admin", adminRoutes)

module.exports = routes