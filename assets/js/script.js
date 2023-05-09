//variable declaration
const intro = document.querySelector(".intro");
const form = document.querySelector(".user");

//username variables 
const usernameP = document.getElementById("username-output");
const userName = document.getElementById("username")

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
 * Function for the timer after starting game
 * 
 * Code used for the Timer:
 * https://codepen.io/ideaguy1974/pen/pZBBLK
 * http://vaidehijoshi.github.io/blog/2015/01/06/the-final-countdown-using-javascripts-setinterval-plus-clearinterval-methods/
 */
function timerGo() {
    let timeLeft = 5;
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








