const express = require('express')
const {
  allCustomers,
  allOrders,
  allOrderDetails,
  allProducts,
  allCategories,
  allTestProducts
} = require('../../controllers/public.controller')
const publicRoutes = express.Router()
const { catchAsyncErrors } = require('../../helpers/tryCatch')

publicRoutes.get('/customers', catchAsyncErrors(allCustomers))
publicRoutes.get('/orders', catchAsyncErrors(allOrders))
publicRoutes.get('/order-details', catchAsyncErrors(allOrderDetails))
publicRoutes.get('/products', catchAsyncErrors(allProducts))
publicRoutes.get('/category', catchAsyncErrors(allCategories))
publicRoutes.get('/test-product', catchAsyncErrors(allTestProducts))

module.exports = { publicRoutes }
