const Question = require("../models/Question");

const homeQuestion = async (req, res) => {
    try {
        const questions = await Question.find().lean();
        res.render("home", { titulo: "Questions manager", questions });
    } catch (error) {
        console.log(error);
    }
};

const addQuestion = async (req, res) => {
    const { questionText } = req.body;
    
    const question = new Question({ question: questionText });
    
    try {
        await question.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

const deleteQuestion = async (req, res) => {
    const { id } = req.params;
    try {
        await Question.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

const editQuestionForm = async (req, res) => {
    const { id } = req.params;
    try {
        const questionDB = await Question.findById(id).lean();
        // console.log(questionDB);
        res.render("home", { titulo: "Questions manager", questionDB });
    } catch (error) {
        console.log(error);
    }
};

const editQuestion = async (req, res) => {
    const { id } = req.params;
    const { questionText } = req.body;
    try {
        const question = await Question.findById(id);
        if (!question) {
            console.log("not found");
            return res.send("Not found");
        }

        await Question.findByIdAndUpdate(id, { question: questionText });

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

const redirect = async (req, res) => {
    const { question } = req.params;
    // console.log(question);
    if (!question) return res.send("Please, complete the question");
    try {
        const question = await Question.findOne({ question });
        // console.log(question);
        if (!question.question) {
            console.log("not found");
            return res.send("error redirect");
        }

        res.redirect(question.question);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    homeQuestion,
    addQuestion,
    deleteQuestion,
    editQuestionForm,
    editQuestion,
    redirect,
};
