const express = require("express");
const router = express.Router();
const { contactForm } = require("../controllers/contact-controller"); // Ensure this path is correct

router.post("/", contactForm);

module.exports = router;
