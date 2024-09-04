const express = require('express')
const {
  getAllCars,
  addCar,
  getUserCar
} = require('../controllers/car.controller')
const { catchAsyncErrors, validationCatches } = require('../helpers/tryCatch')
const { addCarValidation } = require('../helpers/yup.validation')
const carRoutes = express.Router()

carRoutes.get('/find-all', catchAsyncErrors(getAllCars))
carRoutes.post(
  '/add-car',
  validationCatches(addCarValidation),
  catchAsyncErrors(addCar)
)
carRoutes.get('/query', catchAsyncErrors(getUserCar))

module.exports = { carRoutes }
