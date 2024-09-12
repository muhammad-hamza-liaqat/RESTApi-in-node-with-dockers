const express = require('express')
const orderRoutes = express.Router()
const { addOrderValidation } = require('../../helpers/yup.validation')
const { catchAsyncErrors, validationCatches } = require('../../helpers/tryCatch')
const { addOrderForCar, fetchAllOrders } = require('../../controllers/order.controller')
const authorizeUserOnly = require("../../middleware/authorizeRoles")

orderRoutes.post(
    '/place-order',
    validationCatches(addOrderValidation),
    catchAsyncErrors(addOrderForCar)
)

orderRoutes.get("/get-orders", catchAsyncErrors(fetchAllOrders))

module.exports = { orderRoutes }