const express = require("express");
const router = express.Router();

const referralController = require("../controllers/referralController");

router.post("/get-getreferrals", referralController.getReferrals);

module.exports = router;