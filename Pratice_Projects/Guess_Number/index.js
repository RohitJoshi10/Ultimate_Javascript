// Returns a random integer from 1 to 100: Math.floor(Math.random()*100)+1
let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const prevGuesses = document.querySelector(".guesses");
let remainingGuesses = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true; // It will tell me if the user is availabl to play the game or not.

if(playGame){
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // will check if the input lies correctly b/w 1 to 100 and should be a integer.
    if(isNaN(guess)){
        alert("Please enter a valid number");
    } else if(guess < 1){
        alert("Please enter a number more than 1");
    } else if(guess > 100){
        alert("Please enter a number less than 100");
    } else{
        prevGuess.push(guess); // push the number in the array
        // Now check if the user game is getting over or not...as it might be the case the user is having the last attempt
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame()
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // Will check whether the input guess is equal to random value or higher or lower.
    if(guess === randomNumber){
        displayMessage("Congratulation!🎉 You Guessed it Right!");
        endGame();
    } else if(guess < randomNumber){
        displayMessage("Number is TOO low🥱");
    } else if(guess > randomNumber){
        displayMessage("Number is TOO High🥱");
    }

}

function displayGuess(guess){
    // will clean the value for next guess, display the prev guess and remaining guess.
    userInput.value = "";
    prevGuesses.innerHTML += `${guess}&nbsp,`;
    numGuess++;
    remainingGuesses.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''; // jab end ho jaye toh value clean kr do.
    userInput.setAttribute('disabled', '') // game is finised and now user should not be able to enter a new value so disabling it's attribute and this disabled works as a key value pair so giving ''.
    p.classList.add("buttton");
    p.innerHTML = `<button id="newGame">Start new Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", (e)=>{
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        prevGuesses.innerHTML = '';
        remainingGuesses.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        playGame = true;
    })
}


