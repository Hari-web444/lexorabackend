const express = require("express");
const router = express.Router();

const adUserController = require("../../controllers/admin/adUserController");

router.post("/login", adUserController.AdLogin);
router.post("/forgot-password", adUserController.forgotPassword);
router.post("/verify-otp", adUserController.verifyOtp);
router.post("/resend-otp", adUserController.resendOtp);
router.post("/reset-password", adUserController.resetPassword);

module.exports = router;