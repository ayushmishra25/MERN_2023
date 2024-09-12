const express = require("express");
const router = express.Router();

const contactForm = require("../controllers/contact-controller");

router.route("/contact").get(contactForm);

module.exports = router;