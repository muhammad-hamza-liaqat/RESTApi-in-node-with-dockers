const express = require('express')
const { defaultPage, registerMe, loginMe } = require('../../controllers/user.controller')
const { catchAsyncErrors, validationCatches } = require('../../helpers/tryCatch')
const { addUserValidation, loginValidation } = require("../../helpers/yup.validation");
const userRoutes = express.Router()

userRoutes.get("/", defaultPage)
userRoutes.post("/register-me", validationCatches(addUserValidation), catchAsyncErrors(registerMe))
userRoutes.post("/login", validationCatches(loginValidation), catchAsyncErrors(loginMe))


module.exports = { userRoutes }
