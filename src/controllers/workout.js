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
        const workout = await Workout.findById(req.params.workoutId);

        res.render("workout", {title: workout.name, username: req.user.email});
    }
    catch(err){
        showWorkout(res, req);
    }
}


module.exports.createWorkout = async function(req,res, next){
    if(!req.body.name){
        res.redirect("/workouts");
    }
    else{
        try{
            const workout = new Workout({name: req.body.name, userId: req.user._id});
            await workout.save();
            res.redirect(`/workouts/${workout._id}`);
        }
        catch(err){
            return next(err);
        }
    }
}
