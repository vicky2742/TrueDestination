const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const signupControllers = require("../controllers/user.js");

router.get("/signup", signupControllers.renderSignup);

router.post("/signup", wrapAsync(signupControllers.signup));

router.get("/login", signupControllers.renderLogin);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  signupControllers.login
);

router.get("/logout", signupControllers.logout);

module.exports = router;
