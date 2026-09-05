const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController");

router.get("/get-profiledetails/:id", profileController.getProfileData);

module.exports = router;