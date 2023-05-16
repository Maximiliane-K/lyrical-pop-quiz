//variable declaration
const intro = document.querySelector(".intro");
const form = document.querySelector(".user");
const game = document.querySelector(".game-play")

//username variables 
const usernameP = document.getElementById("username-output");
const userName = document.getElementById("username")

//main game variables
const questionElement = document.getElementById("lyrics"); 
const optionElements = document.querySelectorAll(".options");
const allAnswers = document.getElementById("answer-buttons");
const nextBtn = document.querySelector(".next");

//When the DOM is finished loading all sections except the intro-section shall be hidden

document.addEventListener("DOMContentLoaded", function() {

    // Code used for hiding sections https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
    
    document.querySelector(".user").style.display = "none";
    document.querySelector(".game-play").style.display = "none";
    document.querySelector(".result").style.display = "none"; 

}); 

/**
 * Hides the two buttons on the intro page when "Start Game" is clicked 
 * and shows form for user to enter username
 */
function showHideIntro() {

    intro.style.display = "none";
    form.style.display = "block";
}

/**
 * Shows error when the inpout field for username is left empty 
 * and when username is succesfully entered hides form sectiona and shows main game section 
 */
function enterBtn() {
    const game = document.querySelector(".game-play");
    console.log("function fired");

    let userName = document.getElementById("username").value;

    //Code for the <div> is from the CodeInstitutes "Validating Form Data" lesson
    if (userName === null || userName === "") {
        let errorDiv = document.getElementById("errors");
        errorDiv.innerHTML = "Please choose a username to play the game!";
        errorDiv.style.display="block";
    } else {
        console.log("Username entered successfully!");
        intro.style.display = "none";
        form.style.display = "none";
        game.style.display = "block";
    }
}

// function for displaying the username on tha main game section after clicking the enter-button
 
function displayUsername() {
    usernameP.innerHTML = "Lets Get Lyrical " + userName.value + "!";
    console.log("Username:", userName.value)
}

/**
 * Function to hide the lyrics and answer options befor clickling "Go!"
 */
function hideGame() {
    console.log("Game hidden")

    questionElement.style.display = "none";
    allAnswers.style.display = "none";
    nextBtn.style.display = "none";
}

/**
 * Function for the timer after starting game
 * 
 * Code used for the Timer:
 * https://codepen.io/ideaguy1974/pen/pZBBLK
 * http://vaidehijoshi.github.io/blog/2015/01/06/the-final-countdown-using-javascripts-setinterval-plu/s-clearinterval-methods/
 */
document.getElementById("start").addEventListener("click", function() {
    console.log("timer started");

    let timeLeft = 30;
    let timerInterval= setInterval(startTimer, 1000);

    document.getElementById("start").style.display = "none";
    
    function startTimer(){
        document.getElementById("timer").innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    
        if (timeLeft === 0) {
    
        // clearTimeout(timerId);
        console.log("countdown");
       
        clearInterval(timerInterval);
        let result = document.querySelector(".result");

        result.style.display = "block";
        intro.style.display = "none";
        form.style.display = "none";
        game.style.display = "none";
        console.log("Times up!");
    }
  }
});


 /**
  * Function for showing main game section after clicking "Go!" button
  */
function displayGame() {
    console.log("Show game")
    questionElement.style.display = "block";
    allAnswers.style.display = "block";
    
    showQuestion();
}


// variable to be used as index to access questions array 
let currentQuestion = 0;

 
//function for displaying questions and answer options
  
function showQuestion() {

    const question = questions[currentQuestion];
    questionElement.innerHTML = "Lyrics: " + question.text; 
    console.log(`Lyrics:${question.text}`);

    // loop to iterate through answer options and display each inside button-tag 
    optionElements.forEach(function(button, index) {
        button.textContent = question.options[index];
        console.log(`Answer option:${question.options[index]}`);
    });

    // loop to iterate through answer options and when clicked set as
    let answerOptions = optionElements;
    for (i = 0; i < answerOptions.length; i++) {
        answerOptions[i].setAttribute("onclick", "answerSelected(this)");    
    }
}

function answerSelected(answer) {
    // variables to define the selected answer and the correct answer 
    let answerSelection = answer.innerHTML;
    let correctAnswer = questions[currentQuestion].answer;

    // check the selected answer if this is equal to the correct answer
    if (answerSelection === correctAnswer) {
        answer.classList.add("right-answer");
        incrementRight();
        
    } else {
        answer.classList.add("wrong-answer");
        incrementWrong();   
    }

    // show next button to get the next question 
    nextBtn.style.display="block";

    // loop for diabling answer options so only one can be choosen
    for (i = 0; i < optionElements.length; i++) {
        optionElements[i].classList.add("disabled") 
    }
}

/**
 * Function to increment index of currentQuestion to show next question
 */
    nextBtn.addEventListener("click", () => {
        currentQuestion++;
        setNextQuestion();
    }); 
/*
 * Function to increment score of correct answers 
 */
function incrementRight(){
    let currentScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++currentScore;
    console.log(`score ${currentScore}`);
}

/**
 * Function to increment score of wrong answers
 */
function incrementWrong(){
    let currentScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++currentScore;
    console.log(`incorrect score ${currentScore}`);
}

/**#
 * Function to display next question
 */
function setNextQuestion() {
    console.log("next question");
    nextBtn.style.display="none";
    showQuestion();
}

function locationreload() {
    location.reload();
}















