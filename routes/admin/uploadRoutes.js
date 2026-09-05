const express = require("express");
const router = express.Router();
const upload = require("../../middleware/upload");
const uploadController = require("../../controllers/admin/uploadController");

router.post("/upload-document", upload.single("file"), uploadController.uploadDocument);
router.get("/download-document/:id", uploadController.downloadDocument);
router.get("/get-document", uploadController.getDocument);

module.exports = router;