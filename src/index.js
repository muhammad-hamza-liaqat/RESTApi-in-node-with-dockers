const express = require('express')
const app = express()
require('dotenv').config()
const { indexRoutes } = require('./routes/index.routes')
require('./config/mongodb.config')
const { logger, logRequestDuration } = require('./utils/winston')

app.use(logRequestDuration)
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`)
  next()
})

app.use('/', indexRoutes)

app.listen(process.env.PORT, () => {
  console.warn(`server is running at http://localhost:${process.env.PORT}`)
})
