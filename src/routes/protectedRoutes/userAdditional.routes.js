const express = require("express");
const { catchAsyncErrors } = require("../../helpers/tryCatch");
const {
  addAdditionalInformation,
  fetchInformation,
} = require("../../controllers/userAdditionalInfo.controller");

const userAdditionalInfoRoutes = express.Router();

userAdditionalInfoRoutes.post(
  "/add-information",
  catchAsyncErrors(addAdditionalInformation)
);

userAdditionalInfoRoutes.get(
  "/my-profile",
  catchAsyncErrors(fetchInformation)
);

module.exports = { userAdditionalInfoRoutes };
