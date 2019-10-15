//Global Variables

var start = document.getElementById("startbutton");
var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var timer = document.getElementById("timer");
var finalScore = document.getElementById("finalscore");
var linkToStart = document.getElementById("linkToStart");
var enterInitials = document.getElementById("enterInitials");
var highScoreBtn = document.getElementById("renderHighscore");
var listHighscores = document.getElementById("listHighscores");

//Questions Object

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "1. strings",
        choice2: "2. booleans",
        choice3: "3. alerts",
        choice4: "4. numbers",
        correct: "3"
    }, {
        question: "The condition in an if/else statement is enclosed within ______.",
        choice1: "1. quotes",
        choice2: "2. curly brackets",
        choice3: "3. parentheses",
        choice4: "4. square brackets",
        correct: "2"
    }, {
        question: "Arrays in JavaScript can be used to store ________.",
        choice1: "1. numbers and strings",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. all of the above",
        correct: "4"
    }, {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choice1: "1. commas",
        choice2: "2. curly brackets",
        choice3: "3. quotes",
        choice4: "4. parentheses",
        correct: "4"
    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. terminal/bash",
        choice3: "3. for loops",
        choice4: "4. console.log",
        correct: "4"
    }
]

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
const questionTime = 15;
var questionTimer;
var score = 0;


//Render Question Function

function renderQuestion() {
    for (var i = 0; i < questions.length; i++) {
        var q = questions[runningQuestion];

        question.innerHTML = "<h3>" + q.question + "</h3>";
        choice1.innerHTML = q.choice1;
        choice2.innerHTML = q.choice2;
        choice3.innerHTML = q.choice3;
        choice4.innerHTML = q.choice4;

    }
}


renderQuestion();
renderCounter();
questionTimer = setInterval(renderCounter, 1000);

//Check Answer Function

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score += 2;
        if (count <= 10)
            score += 1;
        //alert("Correct!");
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(questionTimer);
        scoreRender();
    }
}

//Render Counter Function

function renderCounter() {
    if (count <= questionTime) {
        timer.innerHTML = "Time: " + count;
        count++
    } else {
        count = 0;
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(questionTimer);
        }
    }
}

//Render Final Score

function scoreRender() {
    finalscore.innerHTML = ("Your score is ") + score + ("/10!");

    //Create Initials Element

    newTextBox = document.createElement("input");
    newTextBox.setAttribute("type", "text");
    newTextBox.setAttribute("placeholder", "Enter Initials");
    enterInitials.appendChild(newTextBox);

    //Create Initials Enter Button

    newEnterButton = document.createElement("input");
    newEnterButton.setAttribute("type", "submit");
    newEnterButton.innerHTML = ("Submit");
    enterInitials.appendChild(newEnterButton);
    newEnterButton.style.backgroundColor = '#e2725b';
    newEnterButton.style.color = 'white';
    newEnterButton.style.borderRadius = '10px'
    newEnterButton.style.fontSize = '12px';
    newEnterButton.style.border = '1px solid black';
    newEnterButton.style.fontWeight = 'lighter';

    //Create "Back to Start" Button

    newBtn = document.createElement("button");
    newBtn.innerHTML = ("Back to Start")
    linkToStart.appendChild(newBtn);
    newBtn.style.backgroundColor = 'teal';
    newBtn.style.color = 'white';
    newBtn.style.borderRadius = '10px'
    newBtn.style.border = '1px solid black';
    newBtn.style.fontWeight = 'lighter';
    newBtn.style.width = '150px';

    var initialsForm = document.getElementById("initialsForm");

    initialsForm.addEventListener("submit", function (event) {
        event.preventDefault();

        //Store Items to Local Storage

        localStorage.setItem("Initials", newTextBox.value);
        localStorage.setItem("Score", score);

        console.log(newTextBox.value);
        console.log(score)

    }
    )
}
























    //for (let i = 0; i < localStorage.length; i++) {
    //const initials = localStorage.initials(i);
    //const score = localStorage.getItem(initials);










