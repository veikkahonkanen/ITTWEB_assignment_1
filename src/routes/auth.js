const express = require('express');
const auth = require("../controllers/auth");
const ensureLogin= require("connect-ensure-login");

var router = express.Router();


router.use(ensureLogin.ensureLoggedOut("/workouts"));
router.get("/login", auth.showLogin);
router.get("/register", auth.showRegister);

router.post('/login', auth.loginUser);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
})

router.post("/register", auth.registerUser);
module.exports = router;
