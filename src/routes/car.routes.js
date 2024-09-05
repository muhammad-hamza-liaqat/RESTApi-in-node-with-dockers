const express = require('express')
const {
  addingCar,
  getUserAllCars
} = require('../controllers/car.controller')
const { catchAsyncErrors, validationCatches } = require('../helpers/tryCatch')
const { addCarValidation } = require('../helpers/yup.validation')
const carRoutes = express.Router()
const authToken = require("../middleware/auth")

carRoutes.get('/find-all', authToken, catchAsyncErrors(getUserAllCars))
carRoutes.post(
  '/add-car', authToken,
  validationCatches(addCarValidation),
  catchAsyncErrors(addingCar)
)

module.exports = { carRoutes }
