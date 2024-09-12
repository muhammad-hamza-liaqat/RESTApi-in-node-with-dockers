const express = require('express')
const adminRoutes = express.Router()
const { catchAsyncErrors } = require('../../helpers/tryCatch')
const { getAllUsers } = require('../../controllers/user.controller')

adminRoutes.get('/all-users', catchAsyncErrors(getAllUsers))

module.exports = { adminRoutes }
