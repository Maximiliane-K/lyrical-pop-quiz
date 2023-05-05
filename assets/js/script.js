//When the DOM is finished loading all sections except the intro-section shall be hidden
// Code used for hiding elements https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/

document.addEventListener("DOMContentLoaded", function() {

    //Hide form section for username
    document.querySelector(".user").style.display = "none";

    //Hide main game section 
    document.querySelector(".gamePlay").style.display = "none";

    //Hide result page
    document.querySelector(".result").style.display = "none";
});


/**
 * Hides the two buttons on the intro page when "Start Game" is clicked 
 */

let intro = document.querySelector(".intro");
function showHideIntro() {
    intro.style.display = "none";
}
