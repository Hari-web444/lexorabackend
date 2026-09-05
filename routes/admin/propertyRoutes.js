const express = require("express");
const router = express.Router();

const propertyController = require("../../controllers/admin/propertyController");

router.get("/get-allproperty", propertyController.getAllProperty);
router.post("/add-property", propertyController.addProperty);
router.post("/update-property/:id", propertyController.updateProperty);

module.exports = router;