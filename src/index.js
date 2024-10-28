const express = require('express');
const app = express();
require('dotenv').config();
const { indexRoutes } = require('./routes/index.routes');
require("./config/mongodb.config");
const bugsnagMiddleware = require("./middleware/bugSnag"); 

app.use(bugsnagMiddleware.requestHandler);

app.use('/', indexRoutes);

app.use(bugsnagMiddleware.errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.warn(`Server is running at http://localhost:${process.env.PORT || 3000}`);
});
