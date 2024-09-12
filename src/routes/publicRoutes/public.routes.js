const express = require("express");
const { allCustomers } = require("../../controllers/public.controller");
const publicRoutes = express.Router();

publicRoutes.get("/customer", allCustomers)

module.exports = { publicRoutes }