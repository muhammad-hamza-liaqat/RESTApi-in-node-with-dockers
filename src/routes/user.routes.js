const express = require('express')
const {
  defaultPage,
  getAllUsers,
  addUser
} = require('../controller/user.controller')
const userRoutes = express.Router()
const { catchAsyncErrors, validationCatches } = require('../utils/tryCatch')
const { addUserValidation } = require('../utils/yup.validations')

userRoutes.get('/', catchAsyncErrors(defaultPage))
userRoutes.get('/find-all', catchAsyncErrors(getAllUsers))
userRoutes.post(
  '/add',
  validationCatches(addUserValidation),
  catchAsyncErrors(addUser)
)

module.exports = { userRoutes }
