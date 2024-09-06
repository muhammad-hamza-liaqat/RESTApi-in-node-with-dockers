const express = require('express')
const publicRoutes = express.Router()

const { userRoutes } = require('./user.routes')

publicRoutes.use('/auth', userRoutes)

module.exports = publicRoutes
