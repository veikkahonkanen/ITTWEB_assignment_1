const mongoose = require("mongoose");
const exercise = require("./exercise").exerciseSchema;

const Schema = mongoose.Schema;

const programSchema = new Schema({
    userId: { type: mongoose.ObjectId, required: true },
    name: { type: String, required: true },
    exercises: [exercise]
});

const Program = mongoose.model("Program", programSchema);
module.exports = Program;

