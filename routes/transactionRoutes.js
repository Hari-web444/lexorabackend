const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transactionController");

router.get("/get-transaction/:id", transactionController.getTransactDetails);

module.exports = router;