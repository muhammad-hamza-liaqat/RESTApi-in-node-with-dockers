const express = require("express");
const public = express.Router();
const { publicRoutes } = require("./public.routes");


public.use("/public", publicRoutes)


module.exports = public