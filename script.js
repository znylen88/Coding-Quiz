var start = document.getElementById("startbutton");
var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var timer = document.getElementById("timer");
var finalScore = document.getElementById("finalscore");

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

console.log(score);

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

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score++;
        //alert("Correct!");
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(questionTimer);
        scoreRender();
    }
}

function renderCounter() {
    if (count <= questionTime) {
        timer.innerHTML = "Time: " + count;
        count++
    } else {
        count = 0;
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
            }else{
                clearInterval(questionTimer);
            }
        }   
    }

    function scoreRender(){
        finalscore.innerHTML = ("Your score is ") + score + ("/5!");
        
            
            
        console.log(score);
        

    }

    