// errorMiddleware.js

const httpStatus = require("http-status");

const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  // Handle specific errors if needed

  if (err.name === "ValidationError") {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: "Validation error" });
  }

  // Handle other errors
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
};
module.exports = errorHandler;
