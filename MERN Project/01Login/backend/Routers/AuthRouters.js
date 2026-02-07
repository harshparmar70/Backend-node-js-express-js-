const express = require("express");

let router = express.Router();
let { signup, login } = require("../Conrollers/AuthContoller");
const { Signupvalidation, Loginvalidation } = require("../Middlewares/AuthValidation");

router.post("/login", Loginvalidation, login);
router.post("/signup", Signupvalidation, signup);

module.exports = router;