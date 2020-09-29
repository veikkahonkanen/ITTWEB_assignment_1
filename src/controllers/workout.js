workouts = []

const Workout = require("../models/workout");


function showWorkout(res){
    res.render('workouts', {title: "Workouts"});
}
module.exports.showWorkouts  = function(req,res,next){
    res.render('workouts', {title: "Workouts", username: req.user.email});
    // showWorkout(res);
}

module.exports.showWorkout = async function(req, res, next){
    try{
        const workout = await Workout.findById(req.params.workspaceId);

        res.render("workout", {title: workout.name});
    }
    catch(err){
        showWorkout(res);
    }
    
}
