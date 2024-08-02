const express = require("express");
const router = express.Router();
const { home, register, login } = require("../controllers/auth-controllers");
const signupSchema = require("../validators/auth-validator"); 
const validate = require("../middlewares/validate-middlewares"); 

router.get("/", home);
router.post("/register", validate(signupSchema), register);
router.post("/login", login);

module.exports = router;




