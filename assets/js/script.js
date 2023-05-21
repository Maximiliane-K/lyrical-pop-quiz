//variable declaration
const introSection = document.querySelector(".intro");
const formSection = document.querySelector(".user");
const gameSection = document.querySelector(".game-play");
const resultSection = document.querySelector(".result");

//username variables 
const usernameP = document.getElementById("username-output");
const userName = document.getElementById("username")

//main game variables
const questionElement = document.getElementById("lyrics"); 
const optionElements = document.querySelectorAll(".options");
const allAnswers = document.getElementById("answer-buttons");
const nextBtn = document.querySelector(".next");

//when the DOM is finished loading all sections except the intro-section shall be hidden
document.addEventListener("DOMContentLoaded", function() {

    formSection.classList.add("hide");
    gameSection.classList.add("hide");
    resultSection.classList.add("hide");

}); 

/*
 *hides the two buttons on the intro page when "Start Game" is clicked 
 *and shows form for user to enter username
 */
function showHideIntro() {

    introSection.classList.add("hide");
    formSection.classList.remove("hide");
}

/*
 *shows error when the inpout field for username is left empty 
 *and when username is succesfully entered hides form sectiona and shows main game section 
 */
function enterBtn() {
    console.log("function fired");

    let userName = document.getElementById("username").value;

    //code for the <div> is from the CodeInstitutes "Validating Form Data" lesson
    if (userName === null || userName === "") {
        let errorDiv = document.getElementById("errors");
        errorDiv.innerHTML = "Please choose a username to play the game!";
        errorDiv.style.display="block";

    } else {
        console.log("Username entered successfully!");
        formSection.classList.add("hide");
        gameSection.classList.remove("hide");       
    }
}

//function for displaying the username on tha main game section after clicking the enter-button
 function displayUsername() {

    usernameP.innerHTML = userName.value + "!";
    console.log("Username:", userName.value)
}

//function to hide the lyrics and answer options befor clickling "Go!"
function hideGame() {
    console.log("Game hidden")

    questionElement.classList.add("hide");
    nextBtn.classList.add("hide");
    allAnswers.style.display = "none";
}

//code for timer was taken from https://www.youtube.com/watch?v=xZXW5SnCiWI
document.getElementById("start").addEventListener("click", function() {
    console.log("timer started");

    //variables for timer 
    let timeLeft = 30;
    let timerInterval= setInterval(startTimer, 1000);

    document.getElementById("start").style.display = "none";
    
    //function that countsdown remaining time
    function startTimer(){
        document.getElementById("timer").innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    
        if (timeLeft === 0) {
        clearInterval(timerInterval);
        
        //calling function to show results when time is up
        results();
        
        resultSection.classList.remove("hide");
        introSection.classList.add("hide");
        formSection.classList.add("hide");
        gameSection.classList.add("hide");
        console.log("Times up!");
    }
  }
});

//function for showing main game section after clicking "Play!" button
function displayGame() {
    console.log("Show game")

    questionElement.classList.remove("hide");
    allAnswers.style.display = "flex";
    
    //calling function that shows the lyrics and answer options
    showQuestion();
}

//variable to be used as index to access questions array 
let currentQuestion = 0;

//function for displaying questions and answer options
function showQuestion() {

    //displays lyrics
    const question = questions[currentQuestion];
    questionElement.innerHTML = "Lyrics: " + question.text; 
    console.log(`Lyrics:${question.text}`);

    //loop to iterate through answer options and display each inside button-tag 
    optionElements.forEach(function(button, index) {
        button.textContent = question.options[index];
        console.log(`Answer option:${question.options[index]}`);
    });

    //loop to iterate through answer options and when clicked set as selected answer
    let answerOptions = optionElements;
    for (i = 0; i < answerOptions.length; i++) {
        answerOptions[i].setAttribute("onclick", "answerSelected(this)");    
    }
}

//function to check selected answer 
function answerSelected(answer) {

    //variables to define the selected answer and the correct answer 
    let selectedAnswer = answer.innerHTML;
    let correctAnswer = questions[currentQuestion].answer;

    //checks the selected answer if this is equal to the correct answer
    if (selectedAnswer === correctAnswer) {
        answer.classList.add("right-answer");
        incrementRight();
        
    } else {
        answer.classList.add("wrong-answer");
        incrementWrong();   
    }

    //show next button to get the next question 
    nextBtn.classList.remove("hide");

    //loop for diabling answer options so only one answer can be choosen
    for (i = 0; i < optionElements.length; i++) {
        optionElements[i].classList.add("disabled") 
    }
}

//eventlistener to fire function to display the next question
nextBtn.addEventListener("click", () => {
        currentQuestion++;
        setNextQuestion();
    }); 

//function to increment score of correct answers 
function incrementRight(){

    let currentScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++currentScore;
    console.log(`score ${currentScore}`);
}

//function to increment score of wrong answers
function incrementWrong(){

    let currentIncorrect = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++currentIncorrect;
    console.log(`incorrect score ${currentIncorrect}`);
}

// function to set the next question
function setNextQuestion() {

    console.log("next question");
    nextBtn.classList.add("hide");
    showQuestion();

    // loop for removing the added classlist from answer buttons
    for (i = 0; i < optionElements.length; i++) {
        optionElements[i].classList.remove("disabled");
        optionElements[i].classList.remove("right-answer");
        optionElements[i].classList.remove("wrong-answer");
    }
}

//function to show a user message on result page depending on the achieved score
function results() {
    console.log("result loaded")

    if (document.getElementById("incorrect").innerText > document.getElementById("score").innerText) {
        document.getElementById("result-message").textContent = "You need to catch up on your lyrics! Try again!";

    } else if (document.getElementById("incorrect").innerText <= document.getElementById("score").innerText) {
        document.getElementById("result-message").textContent = "You Rock! Why not found a cover band!?"
    } 
}

// function to reload document when clicking on home-button in result section
function locationReload() {

    window.location.reload();  
}

//end of JavaScript code















