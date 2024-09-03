const express = require('express')
const app = express()
require('dotenv').config()
const { userRoutes } = require('./routes/user.routes')
const { logger, logRequestDuration } = require('./utils/winston')
const { startServer } = require("./config/server.config")
// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(logRequestDuration)
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`)
  next()
})

app.use('/', userRoutes)

// app.listen(process.env.PORT, () => {
//   console.warn(`server is running at http://localhost:${process.env.PORT}`)
// })


startServer(app);
