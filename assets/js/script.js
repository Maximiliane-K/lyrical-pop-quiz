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
const nextBtn = document.getElementById("next");

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

/**
 * function for displaying the username on tha main game section after clicking the enter-button
 */
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
function timerGo() {
    let timeLeft = 300;
    let timer = document.getElementById("timer");

    document.getElementById("start").style.display = "none";
    
    setInterval(function(){
    if (timeLeft === 0) {
    
        // clearTimeout(timerId);
        console.log("countdown");

        let result = document.querySelector(".result");

        result.style.display = "block";
        intro.style.display = "none";
        form.style.display = "none";
        game.style.display = "none";
        console.log("Times up!");

    } else {
        timer.innerHTML = timeLeft + ' seconds remaining';
        timeLeft-= 1;
    }
    }, 1000);
}

/**
 * Function for showing lyrics and the missing lyrical-snippet
 */
 let currentQuestion = 0;
 
 function showQuestion() {
     console.log("show questions")
 
     for (let question of questions) {
         questionElement.textContent = question.text;
 
         optionElements.forEach(function(element, index){
             element.textContent = question.options[index];
         });
     };
 } 








