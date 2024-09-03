const express = require('express')
const {
  defaultPage,
  menuPage,
  orderPage
} = require('../controller/index.controller')
const indexRoutes = express.Router()

indexRoutes.get('/', defaultPage)

module.exports = { indexRoutes }
