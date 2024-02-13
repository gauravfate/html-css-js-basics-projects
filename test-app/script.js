const quetions = [
    {
        quetion: "Which is the largest animal in world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraff", correct: false },
        ]
    },
    {
        quetion: "Which is the smallest country in world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false },
        ]
    },
    {
        quetion: "Which is the largest desert in world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        quetion: "Which is the smallest continent in world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    }
];

const quetionElement = document.getElementById("quetion");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuetionIndex = 0;
let score = 0;

function startQuize() {
    currentQuetionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuetion();
}

function showQuetion() {
    resetState();
    let currentQuetion = quetions[currentQuetionIndex];
    let quetionNo = currentQuetionIndex + 1;
    quetionElement.innerHTML = quetionNo + ". " + currentQuetion.quetion;

    // console.log(quetionElement);

    currentQuetion.answers.forEach((answer) => {
        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);

    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    quetionElement.innerHTML = `You Score ${score} out of ${quetions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextBtn() {
    currentQuetionIndex++;
    if (currentQuetionIndex < quetions.length) {
        showQuetion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuetionIndex < quetions.length) {
        handleNextBtn();
    } else {
        startQuize();
    }
});

startQuize();