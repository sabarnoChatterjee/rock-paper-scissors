// GLOBAL VARIABLES
let playerScore = 0,
  computerScore = 0,
  bestOf = 1,
  playerChoice = "";

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(`Computer: ${computerChoice}`);
  return computerChoice;
}

function getPlayerChoice() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      playerChoice = e.target.id;
      console.log(`Player: ${playerChoice}`);
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
    return "Human(paper) wins!";
  } else if (computerChoice === 1 && playerChoice === 2) {
    playerScore++;
    return "Human(scissor) wins!";
  } else if (computerChoice === 2 && playerChoice === 0) {
    playerScore++;
    return "Human(rock) wins!";
  } else {
    computerScore++;
    return computerChoice === 0
      ? "Computer(rock wins)"
      : computerChoice === 1
      ? "Computer(paper) wins"
      : "Computer(scissor) wins";
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
