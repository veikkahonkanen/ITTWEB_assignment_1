const express = require('express');
const workoutController = require('../controllers/workout');
const ensureLogin= require("connect-ensure-login");

const router = express.Router();

router.use(ensureLogin.ensureLoggedIn("/auth/login"));

router.get("/", workoutController.showWorkouts);
router.get(":workoutId", workoutController.showWorkout);

module.exports = router;