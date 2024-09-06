const express = require('express')
const {
  addingCar,
  getUserAllCars
} = require('../../controllers/car.controller')
const {
  catchAsyncErrors,
  validationCatches
} = require('../../helpers/tryCatch')
const { addCarValidation } = require('../../helpers/yup.validation')
const carRoutes = express.Router()

carRoutes.get('/find-all', catchAsyncErrors(getUserAllCars))
carRoutes.post(
  '/add-car',
  validationCatches(addCarValidation),
  catchAsyncErrors(addingCar)
)

module.exports = { carRoutes }
