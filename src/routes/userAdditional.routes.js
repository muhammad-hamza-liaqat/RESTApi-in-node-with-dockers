const express = require("express");
const { catchAsyncErrors } = require("../helpers/tryCatch");
const authToken = require("../middleware/auth");
const {
  addAdditionalInformation,
  fetchInformation,
} = require("../controllers/userAdditionalInfo.controller");

const userAdditionalInfoRoutes = express.Router();

userAdditionalInfoRoutes.post(
  "/add-information",
  authToken,
  catchAsyncErrors(addAdditionalInformation)
);

userAdditionalInfoRoutes.get(
  "/my-profile",
  authToken,
  catchAsyncErrors(fetchInformation)
);

module.exports = { userAdditionalInfoRoutes };
