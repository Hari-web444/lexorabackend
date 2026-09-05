const express = require("express");
const router = express.Router();

const investorController = require("../../controllers/admin/investorController");

router.get("/get-allinvestors", investorController.getAllInvestors);
router.post("/add-investors", investorController.createInvestor);
router.post("/update-investors/:id", investorController.updateInvestor);
router.delete("/delete-investors/:id", investorController.deleteInvestor);
router.post("/bulk-add-investors", investorController.bulkAddInvestors);

module.exports = router;