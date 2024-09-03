const express = require('express')
const {
  defaultPage,
  getAllUsers,
  addUser, 
  deleteUserById
} = require('../controller/user.controller')
const userRoutes = express.Router()
const { catchAsyncErrors, validationCatches } = require('../utils/tryCatch')
const { addUserValidation, deleteUserValidations } = require('../utils/yup.validations')

userRoutes.get('/', catchAsyncErrors(defaultPage))
userRoutes.get('/find-all', catchAsyncErrors(getAllUsers))
userRoutes.post(
  '/add',
  validationCatches(addUserValidation),
  catchAsyncErrors(addUser)
)
userRoutes.delete("/delete/:id", validationCatches(deleteUserValidations), catchAsyncErrors(deleteUserById) )

module.exports = { userRoutes }
