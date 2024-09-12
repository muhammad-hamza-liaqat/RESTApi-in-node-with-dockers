const express = require('express')
const joinRoutes = express.Router()
const { catchAsyncErrors } = require('../../helpers/tryCatch')
const {
  fullJoinOnCustomerOrder,
  userFullOrderDetails,
  rightJoin,
  leftJoin
} = require('../../controllers/join.controller')


joinRoutes.get('/customerOrder', catchAsyncErrors(fullJoinOnCustomerOrder))
joinRoutes.get('/customerDetails/:id', catchAsyncErrors(userFullOrderDetails))
joinRoutes.get('/rightJoin', catchAsyncErrors(rightJoin))
joinRoutes.get('/leftJoin', catchAsyncErrors(leftJoin))


module.exports = { joinRoutes }
