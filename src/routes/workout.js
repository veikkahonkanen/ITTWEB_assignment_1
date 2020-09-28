const express = require('express');
const workoutController = require('../controllers/workout');

const router = express.Router();


router.get("/", workoutController.showWorkouts);

module.exports = router;