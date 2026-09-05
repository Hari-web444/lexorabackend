const express = require("express");
const router = express.Router();

const referralsController = require("../../controllers/admin/referralsController");

router.get("/get-allreferrals", referralsController.getAllReferrals);

module.exports = router;