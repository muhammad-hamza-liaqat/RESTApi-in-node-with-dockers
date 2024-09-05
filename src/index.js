const express = require('express')
const app = express()
require('dotenv').config()
const { startServer } = require('./config/server.config')
const { userRoutes } = require('./routes/user.routes')
const { carRoutes } = require('./routes/car.routes')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', userRoutes)
app.use('/car', carRoutes)

startServer(app)
