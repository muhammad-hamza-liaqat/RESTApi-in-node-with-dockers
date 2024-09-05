const express = require('express')
const routes = express.Router()

const { carRoutes } = require('./car.routes')
const { userRoutes } = require('./user.routes')
const { orderRoutes } = require('./order.routes')

routes.use('/car', carRoutes)
routes.use('/auth', userRoutes)
routes.use('/order', orderRoutes)

module.exports = routes
