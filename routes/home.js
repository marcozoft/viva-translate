const express = require("express");
const {
    homeQuestion,
    addQuestion,
    deleteQuestion,
    editQuestionForm,
    editQuestion,
    redirect,
} = require("../controllers/questionController");

const router = express.Router();

router.get("/", homeQuestion);

router.post("/", addQuestion);

router.get("/delete/:id", deleteQuestion);

router.get("/edit/:id", editQuestionForm);

router.post("/edit/:id", editQuestion);

router.get("/:question", redirect);

module.exports = router;
