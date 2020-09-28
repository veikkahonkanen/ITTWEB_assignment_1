module.exports.showWorkouts  = function(req,res,next){
    res.render('workouts', {title: "Workouts", username: req.user.email});
}
