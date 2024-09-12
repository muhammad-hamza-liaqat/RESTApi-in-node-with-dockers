const express = require("express");
const public = express.Router();
const { publicRoutes } = require("./public.routes");
const { joinRoutes } = require("../publicRoutes/join.routes")


public.use("/public", publicRoutes)
public.use("/join", joinRoutes)


module.exports = public