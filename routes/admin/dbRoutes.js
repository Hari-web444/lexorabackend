const express = require("express");
const router = express.Router();

const dbController = require("../../controllers/admin/dbController");

router.get("/get-dashboarddatas", dbController.getDbDetails);

module.exports = router;