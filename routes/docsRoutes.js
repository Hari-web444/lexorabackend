const express = require("express");
const router = express.Router();

const docsController = require("../controllers/docsController");

router.get("/get-documents/:id", docsController.getDocsDetails);
router.get("/download-document/:id",docsController.downloadDocument);

module.exports = router;