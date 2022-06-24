const express = require('express');
const router = express.Router();
const PdfController= require("../Cointroller/pdfController")

router.get("/pdf" , PdfController.simplePdfUpload)

module.exports = router;