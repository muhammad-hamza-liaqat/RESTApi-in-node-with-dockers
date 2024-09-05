const express = require('express')
const {
  getAllCars,
  addingCar,
  getUserCar
} = require('../controllers/car.controller')
const { catchAsyncErrors, validationCatches } = require('../helpers/tryCatch')
const { addCarValidation } = require('../helpers/yup.validation')
const carRoutes = express.Router()
const authToken = require("../middleware/auth")

carRoutes.get('/find-all', catchAsyncErrors(getAllCars))
carRoutes.post(
  '/add-car', authToken,
  validationCatches(addCarValidation),
  catchAsyncErrors(addingCar)
)
carRoutes.get('/query', catchAsyncErrors(getUserCar))

module.exports = { carRoutes }
