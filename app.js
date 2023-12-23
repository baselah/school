require("dotenv").config();
const express = require("express");
const app = express();
require("express-async-errors"); // Import the package
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const sequelize = require("./util/database");
const errorHandler = require("./middlewares/errorMiddleware");
const router = require("./routes");
const validateRequest = require("./middlewares/validateRequest");


app.use(validateRequest);
// Global error handling middleware
app.use(process.env.HOSTPREFIX, router);
// Apply global error handling middleware
app.use(errorHandler);
app.listen(process.env.PORT, function () {
  //sequelize.sync({force:true});
  console.log(`Server is listening on localhost: ${process.env.PORT}`);
});
