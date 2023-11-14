



















const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Question 1",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 1
    },
    {
        question: "Question 2",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 3",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 4
    },
    {
        question: "Question 4",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 5",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 6",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 7",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 8",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 9",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 10",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 11",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 12",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 13",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 14",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 15",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },

];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 15;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS && score > 80) {
        //go to the end page
        return window.location.assign("/success.html");
    } else if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS && score < 80) {
        return window.location.assign("/fail.html");
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();

    