const mongoose = require("mongoose");

const dbUri = "mongodb+srv://ondrej:NFtJJkoVObT4Hs0N@cluster0.wlx3e.mongodb.net/workout?retryWrites=true&w=majority&ssl=true";

mongoose.connect(dbUri);

mongoose.connection.on('connected', () => { console.log(`Mongoose connected to ${dbUri}`); });
mongoose.connection.on('error', err => { console.log('Mongoose connection error:', err); });
mongoose.connection.on('disconnected', () => { console.log('Mongoose disconnected'); });

// For nodemonrestarts 
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemonrestart', () => { process.kill(process.pid, 'SIGUSR2'); });
});
// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => { process.exit(0); });
});
// For Herokuapp termination
process.on('SIGTERM', () => {
    gracefulShutdown('Herokuapp shutdown', () => { process.exit(0); });
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};