const User = require("../models/user");
const passport = require('passport');

module.exports.showLogin  = function(req,res,next){
    res.render('login', {title: "Login", route: "login"});
}

function showRegister(res, extraParams){
    res.render('register', {title: "Register", route: "register", ...extraParams});
}

module.exports.showRegister  = function(req,res,next){
    showRegister(res,{});
}

module.exports.loginUser  = [passport.authenticate("local", { failureRedirect: "/auth/login" }),
function (req, res) {
  res.redirect("/");
}];

module.exports.registerUser  = async function(req,res, next){
    if(!req.body.email || !req.body.password){
        showRegister(res, {"errorMessage": "All fields required"});
    }
    else{
        try{
            const user = new User({name: req.body.name, email: req.body.email});
            const passwordPlain = req.body.password;
            await user.setPassword(passwordPlain);
            await user.save();
            res.redirect("/workouts");
        }
        catch(err){
            // TOOD: Detect type of error and show informative description ex: taken email
            showRegister(res, {"errorMessage": "Error registering"})
        }
    }
    
}