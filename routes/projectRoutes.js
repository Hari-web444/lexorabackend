const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");

router.get("/get-allprojectlists", projectController.getAllProjectDetails);

module.exports = router;