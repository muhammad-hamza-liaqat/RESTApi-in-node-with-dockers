const express = require('express')
const {
  defaultPage,
  menuPage,
  orderPage,
  bugSnagError
} = require('../controller/index.controller')
const indexRoutes = express.Router()

indexRoutes.get('/', defaultPage)
indexRoutes.get('/menu', menuPage)
indexRoutes.get('/order', orderPage)
// testing route for bugsnag error...
indexRoutes.get('/error', bugSnagError)

module.exports = { indexRoutes }
