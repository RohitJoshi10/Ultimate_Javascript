// Create a game where you start with any random game number. Ask the user to keep guessing
// the game number until the user enters correct value.

let gameNumber = 30;

let userNumber = prompt("Guess the correct number");

while(userNumber != gameNumber)
{
    userNumber = prompt("You entered a wrong number guess again...");
}

console.log("Congralutations, you entered the right number");