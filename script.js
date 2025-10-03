function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(`Computer: ${computerChoice}`);   
  return computerChoice;
}


function getHumanChoice() {
  let humanChoice = prompt("Enter 0 for rock, 1 for paper or 2 for scissor.");
  console.log(`Human: ${humanChoice}`);
  return humanChoice;
}

// GLOBAL VARIABLES
let humanScore = 0,
  computerScore = 0,
  bestOf = 5;

  function playRound(computerChoice, humanChoice) {
  if (computerChoice == humanChoice) return "Tie";
  if (computerChoice === 0 && humanChoice === 1) {
    humanScore++;
    return "Human(paper) wins!";
  } else if (computerChoice === 1 && humanChoice === 2) {
    humanScore++;
    return "Human(scissor) wins!";
  } else if (computerChoice === 2 && humanChoice === 0) {
    humanScore++;
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

function printScore() {
  if (humanScore > computerScore) console.log("🎉 Human wins the game!");
  else if (computerScore > humanScore)
    console.log("💻 Computer wins the game!");
  else console.log("🤝 It's a tie overall!");
}

function playGame() {
  while (bestOf) {
    let humanChoice = Number(getHumanChoice());
    let computerChoice = getComputerChoice();

    let result = playRound(computerChoice, humanChoice);

    console.log(result);
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

    bestOf--;
  }
  printScore();
}

playGame();
