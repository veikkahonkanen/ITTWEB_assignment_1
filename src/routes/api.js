const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const workoutRouter = require('./workout');


router.use("/workouts", workoutRouter);
router.use("/auth", authRouter);

module.exports = router;
