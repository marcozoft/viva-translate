const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
    question: {
        type: String,
        unique: true,
        required: true
    }    
});


const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
