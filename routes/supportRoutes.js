const express = require("express");
const router = express.Router();

const supportController = require("../controllers/supportController");

router.get("/get-ticketcategories/:id", supportController.getTicketCat);
router.post("/raise-ticket", supportController.raiseTicket);

module.exports = router;