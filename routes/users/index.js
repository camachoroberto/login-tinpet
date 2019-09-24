const express = require("express");
const router = express.Router();
const signupGet = require("./../../services/users/signupGet");
const signupPost = require("./../../services/users/signupPost");
const verify = require("./../../services/users/verify");
const loginGet = require("./../../services/users/loginGet");
const loginPost = require("./../../services/users/loginPost");
const logout = require("./../../services/users/logout");

router.get("/signup", signupGet);
router.post("/signup", signupPost);
router.post("/verify", verify);
router.get("/login", loginGet);
router.post("/login", loginPost);
router.get("/logout", logout);

module.exports = router;
