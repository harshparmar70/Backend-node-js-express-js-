let express = require("express");

let { loginInsert } = require("../controller/loginController");

let loginRoutes = express.Router();

loginRoutes.post("/login-insert", loginInsert)

module.exports = loginRoutes;