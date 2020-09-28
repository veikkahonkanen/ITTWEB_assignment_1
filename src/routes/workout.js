const express = require('express');
const workoutController = require('../controllers/workout');
const ensureLogin= require("connect-ensure-login");

const router = express.Router();

router.use(ensureLogin.ensureLoggedIn("/auth/login"));

router.get("/", workoutController.showWorkouts);

module.exports = router;