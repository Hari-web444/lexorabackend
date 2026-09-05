const express = require("express");
const router = express.Router();

const faqsController = require("../controllers/faqsController");

router.get("/get-faqsdata", faqsController.getFAQsData);

module.exports = router;