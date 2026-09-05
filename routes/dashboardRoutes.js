const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

router.get("/get-dashboarddata/:id", dashboardController.getAllDbDatas);

module.exports = router;