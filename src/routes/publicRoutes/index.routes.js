const express = require("express")
const publicRoutes = express.Router()

const { userRoutes } = require("./user.routes")

module.exports = publicRoutes