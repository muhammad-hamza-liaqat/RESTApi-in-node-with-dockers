const express = require('express')
const orderRoutes = express.Router()
const { addOrderValidation } = require('../helpers/yup.validation')
const { catchAsyncErrors, validationCatches } = require('../helpers/tryCatch')
const { addOrderForCar } = require('../controllers/order.controller')
const authToken = require('../middleware/auth')

orderRoutes.post(
    '/place-order',
    authToken,
    validationCatches(addOrderValidation),
    catchAsyncErrors(addOrderForCar)
)

module.exports = { orderRoutes }