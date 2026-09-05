const express = require("express");
const router = express.Router();

const messageController = require("../../controllers/admin/messageController");

router.get("/get-adminmessage", messageController.getAllMessage);
router.post("/send-adminmessage", messageController.sendMessage);

module.exports = router;