const express = require('express')
const orderRoutes = express.Router()
const { addOrderValidation } = require('../../helpers/yup.validation')
const { catchAsyncErrors, validationCatches } = require('../../helpers/tryCatch')
const { addOrderForCar } = require('../../controllers/order.controller')

orderRoutes.post(
    '/place-order',
    validationCatches(addOrderValidation),
    catchAsyncErrors(addOrderForCar)
)

module.exports = { orderRoutes }