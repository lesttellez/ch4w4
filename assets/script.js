var quizStatus = true;
var questionNumber = 0;
var answerNumber = 0;
var score = 0;
var highScore = 40; // Score add fix for ticking timer.
var previewHighScoresBtnEl = document.getElementById('preview-high-scores');
var startQuizBtnEl = document.getElementById('start-quiz');
var answer1BtnEl = document.getElementById('answer1');
var answer2BtnEl = document.getElementById('answer2');
var answer3BtnEl = document.getElementById('answer3');
var answer4BtnEl = document.getElementById('answer4'); 
var submitEl = document.getElementById('submitScore'); // Start Quiz button Btn El
var questionsEl = document.getElementById('questions'); // Questions for the main Div
var mainDivEl = document.getElementById('mainDiv'); // Main div container for all elements except for header elements
var htmlTimeLeft = document.getElementById('timeLeft'); // Display counter @ the html level.
var answerCorrectWrong = document.getElementById('answerCorrectWrong'); // Display counter @ the html level.
var questionDisplayEl = document.createElement("questionDisplay"); // Display Question
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); // Display Question
var enterInitialsEl = document.createElement("enterInitials"); // Enter initials
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); // TextArea
var button1234 = document.createElement("button"); // Test answer 1


answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display='none';
enterInitialsTextArea.style.display='none';

var questionsObject = { // Object that holds correct answers.
    correct: { 
        0 : "Commonly used datatypes DO NOT include?",
        1 : "The condition statement if/else is enclosed with the following:",
        2 : "Arrays can be used to store the following", // Button #4 for 
        3 : "A very useful tool to debug arrays is:", // Button #3
        4 : "Strings must be enclosed with:"
    }
};

var answersObject = { // Object that holds correct answers.
    answers: { 
        0 : {
            0: "Strings",
            1: "Boolean",
            2: "Alerts",
            3: "Numbers"},
        1 : {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"},
            2 : { // Button #3
                0: "Javascript",
                1: "Terminal/bash",
                2: "For loops", 
                3: "Console.log"},      
            3 : { // Answer to question 5 --> Button #2
                0: "Commas",
                1: "Curly brackets",
                2: "Quotes", 
                3: "Parentheses"},      
            4 : { // Button #4
                0: "Number of strings",
                1: "Other arrays",
                2: "Booleans",
                3: "All of the above"},  
        }
    };
    
    //Initialize the display timer at default value
    htmlTimeLeft.textContent = timeLeft;
    
    viewHighScoresBtnEl.addEventListener("click", function() { // View high scores
    
        var quizUsers = "";
        var substringTest ="";
        var highScores = "";
        for (var i=0; i < localStorage.length; i++) {
            var checkUserValue = [];
            
            quizUsers = localStorage.getItem(localStorage.key(i));
            substringTest = quizUsers.substring(0,4) 
            if (substringTest == "quiz") {
                checkUserValue = quizUsers.split(",");
                var userName = checkUserValue[0]
                highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
           }
        }
        window.alert(highScores);
    
    });
    