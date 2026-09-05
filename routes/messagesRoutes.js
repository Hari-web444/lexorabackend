const express = require("express");
const router = express.Router();

const messageController = require("../controllers/messageController");

router.get("/get-messages/:id", messageController.getMessages);

module.exports = router;