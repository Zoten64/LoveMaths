// Wait for the DOM to finish loading before running the game
// Get the button elements and listen for input

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button")

    console.log("Script loaded")

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked submit");
            }

            else{
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })

    }
})

/**
 * The main game loop is called when the script is loaded
 * and after the user's answer has been processed
 */

function runGame(){
    //Creates 2 random numbers between 1 and 25

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer(){

}

function runGame(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}