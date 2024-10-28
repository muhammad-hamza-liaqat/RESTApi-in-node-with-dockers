const express = require('express');
const app = express();
require('dotenv').config();
const { indexRoutes } = require('./routes/index.routes');
require("./config/mongodb.config");
const bugsnagMiddleware = require("./middleware/bugSnag");

// Bugsnag request handler middleware
app.use(bugsnagMiddleware.requestHandler);

app.use('/', indexRoutes);

// Bugsnag error handler middleware
app.use(bugsnagMiddleware.errorHandler);

app.listen(process.env.PORT, () => {
  console.warn(`Server is running at http://localhost:${process.env.PORT}`);
});
