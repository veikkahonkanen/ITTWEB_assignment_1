const { Exercise } = require("../models/exercise");
const Workout = require("../models/workout");

async function showWorkout(res, req){
    const userWorkouts = await Workout.find({ userId: req.user._id }).exec();
    res.render('workouts', {title: "Workouts", username: req.user.email, workouts: userWorkouts});
}

module.exports.showWorkouts  = function(req,res,next){
     showWorkout(res, req);
}

module.exports.showWorkout = async function(req, res, next){
    try{
        const workout = await Workout.findById(req.params.workoutId);

        res.render("workout", {title: workout.name, username: req.user.email, workout : workout});
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
            const workout = new Workout({name: req.body.name, description: req.body.description, userId: req.user._id});
            await workout.save();
            res.redirect(`/workouts/${workout._id}`);
        }
        catch(err){
            return next(err);
        }
    }
}

module.exports.createExercise = async function(req,res, next){
    if(!req.body.name || !req.body.description || !req.body.sets || !req.body.duration){
        res.redirect("/workouts");
    }
    else{
        try{
            const exercise = new Exercise({
                                            name: req.body.name,
                                            description: req.body.description,
                                            set: req.body.sets,
                                            durationType: req.body.durationType,
                                            duration: req.body.duration
                                            });
            console.log(exercise);
            await exercise.save();
            res.redirect(`/workouts/${workout._id}`);
        }
        catch(err){
            return next(err);
        }
    }
}
