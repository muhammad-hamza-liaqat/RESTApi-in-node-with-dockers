const express = require('express')
const { getAllCars } = require('../controllers/car.controller')
const { catchAsyncErrors, validationCatches } = require('../helpers/tryCatch')
const carRoutes = express.Router()

carRoutes.get("/find-all", catchAsyncErrors(getAllCars))


module.exports = { carRoutes }
