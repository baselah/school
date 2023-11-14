const express = require("express");
const router = express.Router();
const billController = require("../controllers/BillController");

router.post("/create", billController.addBill);

module.exports = router;
