const express = require("express");
const router = express.Router();

const supportController = require("../../controllers/admin/supportController");

router.get("/get-alltickets", supportController.getAlltickets);
router.put("/update-ticket/:id", supportController.updategetAlltickets);

module.exports = router;