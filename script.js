// GLOBAL VARIABLES
let playerScore = 0,
  computerScore = 0,
  bestOf = 1,
  playerChoice = "";

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  let choice = computerChoice;
  computerChoice === 0
    ? (computerChoice = "rock")
    : computerChoice === 1
    ? (computerChoice = "paper")
    : (computerChoice = "scissors");
  console.log(`Computer: ${computerChoice.toUpperCase()}`);
  return choice;
}

function getPlayerChoice() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      playerChoice = e.target.id;
      console.log(`Player: ${playerChoice.toUpperCase()}`);
      let computerChoice = getComputerChoice();

      let result = playRound(computerChoice, playerChoice);
      console.log(result);
    });
  });
}

getPlayerChoice();

// let computerChoice = getComputerChoice();

// console.log(computerChoice);

function playRound(computerChoice, playerChoice) {
  if (playerChoice == "rock") playerChoice = 0;
  else if (playerChoice == "paper") playerChoice = 1;
  else playerChoice = 2;
  // console.log(typeof(playerChoice));
  // console.log(playerChoice);

  if (computerChoice == playerChoice) return "Tie";
  if (computerChoice === 0 && playerChoice === 1) {
    playerScore++;
    return "Human wins!";
  } else if (computerChoice === 1 && playerChoice === 2) {
    playerScore++;
    return "Human wins!";
  } else if (computerChoice === 2 && playerChoice === 0) {
    playerScore++;
    return "Human wins!";
  } else {
    computerScore++;
    return computerChoice === 0
      ? "Computer wins!"
      : computerChoice === 1
      ? "Computer wins!"
      : "Computer wins!";
  }
}

// function printScore() {
//   if (humanScore > computerScore) console.log("🎉 Human wins the game!");
//   else if (computerScore > humanScore)
//     console.log("💻 Computer wins the game!");
//   else console.log("🤝 It's a tie overall!");
// }

// let humanChoice = Number(getHumanChoice);
// console.log(humanChoice);

// function playGame() {
//   while (bestOf) {
//     let humanChoice = Number(getHumanChoice());
//     let computerChoice = getComputerChoice();

//     let result = playRound(computerChoice, humanChoice);

//     console.log(result);
//     console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

//     bestOf--;
//   }
//   printScore();
// }

// playGame();
// getHumanChoice()
