const express = require("express");
const router = express.Router();

const returnsController = require("../../controllers/admin/returnsController");

router.get("/get-allinvestorlists", returnsController.getAllInvestorList);
router.get("/get-allreturns", returnsController.getAllReturns);
router.post("/add-returns", returnsController.addReturns);
router.post("/update-return/:id", returnsController.updateReturn);
router.post("/bulk-mark-paid", returnsController.bulkMarkPaid);

module.exports = router;