const express = require("express");
const router = express.Router();

const auditController = require("../../controllers/admin/auditController");

router.get("/get-logdetails", auditController.getAllLogs);

module.exports = router;