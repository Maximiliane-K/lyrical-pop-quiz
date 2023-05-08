//When the DOM is finished loading all sections except the intro-section shall be hidden

document.addEventListener("DOMContentLoaded", function() {

    // Code used for hiding elements https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
    //Hide form section for username
    document.querySelector(".user").style.display = "none";

    //Hide main game section 
    document.querySelector(".game-play").style.display = "none";

    //Hide result page
    document.querySelector(".result").style.display = "none"; 

}); 


/**
 * Hides the two buttons on the intro page when "Start Game" is clicked 
 * and shows form for user to enter username
 */
let intro = document.querySelector(".intro");
let form = document.querySelector(".user");

function showHideIntro() {

    intro.style.display = "none";
    form.style.display = "block";
}

/**
 * Shows error when the inpout field for username is left empty 
 * and when username is succesfully entered hides form sectiona and shows main game section 
 */
let game = document.querySelector(".game-play");

function enterBtn() {
    console.log("function fired");

    let userName = document.getElementById("user-name").value;

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






