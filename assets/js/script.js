//When the DOM is finished loading all sections except the intro-section shall be hidden


document.addEventListener("DOMContentLoaded", function() {

    // Code used for hiding elements https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
    //Hide form section for username
    document.querySelector(".user").style.display = "none";

    //Hide main game section 
    document.querySelector(".gamePlay").style.display = "none";

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


