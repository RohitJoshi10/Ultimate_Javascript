let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    // computer will pick any of the one form these choices rock, paper, scissors
    // We will generate random whole numbers and they will become the index of my options array
    let options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3); // Now it will give me random number in the range of 0-2 and to remove the decimal use math.floor
    return options[randIndx];
}

const drawGame = () => {
    console.log("Game was draw😐");
    msg.innerText = "Game was draw😐 Play Again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win🤩");
        msg.innerText = `You Win🤩 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Loss😣");
        msg.innerText = `You Loss😣 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// computer choice
const playGame = (userChoice) =>  {
   console.log("user choice is:", userChoice);
   // Generating Computer choice
   const compChoice = genCompChoice();
   console.log("Comp choice is:", compChoice);

   if(userChoice === compChoice){
       drawGame();
   }
   else{
    let userWin = true;
    if(userChoice === "rock"){
        // scissors, paper
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        // scissors, rock
        userWin = compChoice === "scissors" ? false : true;
    }
    else{
        // rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
   }

}

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
     });
});

