const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/login", userController.Login);
router.post("/forgot-password", userController.forgotPassword);
router.post("/verify-otp", userController.verifyOtp);
router.post("/resend-otp", userController.resendOtp);
router.post("/reset-password", userController.resetPassword);

module.exports = router;