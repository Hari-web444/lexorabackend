const express = require("express");
const router = express.Router();

const portfolioController = require("../controllers/portfolioController");

router.get("/get-portfoliodata/:id", portfolioController.getPortfolioDetails);
router.get("/get-invprojects/:id", portfolioController.getPropertyData);

module.exports = router;