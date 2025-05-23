const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.get("/services", mainController.services);

// Ruta para recibir el formulario
router.post("/contact", mainController.contactPost);

module.exports = router;
