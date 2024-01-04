const express = require("express");
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;
