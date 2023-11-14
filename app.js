require("dotenv").config();
const express = require("express");
const app = express();
require("express-async-errors"); // Import the package
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const sequelize = require("./util/database");
const errorHandler = require("./middlewares/errorMiddleware");

app.use("/institute/subject", require("./routes/subject"));
app.use("/institute/student", require("./routes/student"));
app.use("/institute/teacher", require("./routes/teacher"));
app.use("/institute/manager", require("./routes/manager"));
app.use("/institute/course", require("./routes/course"));
app.use("/institute/test", require("./routes/test"));
app.use("/institute/feedback", require("./routes/feedback"));
app.use("/institute/class", require("./routes/class"));
app.use("/institute/bill", require("./routes/bill"));
app.use("/institute/lesson", require("./routes/lesson"));
app.use("/institute/schedule", require("./routes/schedule"));
app.use("/institute/notification", require("./routes/notification"));
app.use("/institute/note", require("./routes/note"));
// Global error handling middleware

// Apply global error handling middleware
app.use(errorHandler);
app.listen(process.env.PORT, function () {
  //sequelize.sync({force:true});
  console.log(`Server is listening on localhost: ${process.env.PORT}`);
});
