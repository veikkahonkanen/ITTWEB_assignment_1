workouts = []

const Workout = require("../models/workout");


function showWorkout(res, req){
    res.render('workouts', {title: "Workouts", username: req.user.email});
}
module.exports.showWorkouts  = function(req,res,next){
     showWorkout(res, req);
}

module.exports.showWorkout = async function(req, res, next){
    try{
        const workout = await Workout.findById(req.params.workspaceId);

        res.render("workout", {title: workout.name});
    }
    catch(err){
        showWorkout(res, req);
    }
    
}
