const express = require("express");
const router = express.Router();

const locationController = require("../../controllers/admin/locationController");

router.get("/get-city", locationController.getAllInvestors);

module.exports = router;