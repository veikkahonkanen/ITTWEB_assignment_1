const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    set: { type: Number, required: true },
    reps: { type: Number, required: true }
});

module.exports.Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports.exerciseSchema = exerciseSchema;