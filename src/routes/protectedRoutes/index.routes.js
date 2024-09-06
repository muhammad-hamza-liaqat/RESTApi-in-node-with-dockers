const express = require('express')
const protectedRoutes = express.Router()

const { carRoutes } = require('./car.routes')
const { orderRoutes } = require('./order.routes')
const { userAdditionalInfoRoutes } = require('./userAdditional.routes')

protectedRoutes.use('/car', carRoutes)
protectedRoutes.use('/order', orderRoutes)
protectedRoutes.use('/user', userAdditionalInfoRoutes)

module.exports = protectedRoutes
