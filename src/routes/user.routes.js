const express = require('express')
const { defaultPage, getAllUsers, addUser } = require('../controllers/user.controller')
const { catchAsyncErrors, validationCatches } = require('../helpers/tryCatch')
const { addUserValidation } = require("../helpers/yup.validation");
const userRoutes = express.Router()

userRoutes.get("/", defaultPage)
userRoutes.get("/find-all", catchAsyncErrors(getAllUsers))
userRoutes.post("/add", validationCatches(addUserValidation), catchAsyncErrors(addUser))


module.exports = { userRoutes }
