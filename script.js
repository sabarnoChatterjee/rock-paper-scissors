// GLOBAL VARIABLES
let playerScore = 0,
  computerScore = 0,
  bestOf = 5,
  playerChoice = "";

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  let choice = computerChoice;
  return choice;
}

function playRound(computerChoice, playerChoice) {
  const player = document.querySelector(".player");
  const computer = document.querySelector(".computer");

  if (playerChoice == "rock") playerChoice = 0;
  else if (playerChoice == "paper") playerChoice = 1;
  else playerChoice = 2;

  if (computerChoice == playerChoice) return "Tie";
  if (computerChoice === 0 && playerChoice === 1) {
    playerScore++;
    player.textContent = `Player : ${playerScore}`;
    return "Human wins!";
  } else if (computerChoice === 1 && playerChoice === 2) {
    playerScore++;
    player.textContent = `Player : ${playerScore}`;
    return "Human wins!";
  } else if (computerChoice === 2 && playerChoice === 0) {
    playerScore++;
    player.textContent = `Player : ${playerScore}`;
    return "Human wins!";
  } else {
    computerScore++;
    computer.textContent = `Computer : ${computerScore}`;
    return "Computer wins!";
  }
}

function getPlayerChoice() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      playerChoice = e.target.id;
      let computerChoice = getComputerChoice();

      let result = playRound(computerChoice, playerChoice);

      //UI Result
      const displayResultBox = document.querySelector(".result");
      const displayPlayerScore = document.createElement("h2");
      const displayComputerScore = document.createElement("h2");
      const displayResult = document.createElement("h2");
      displayResultBox.textContent = "";

      if (playerScore < bestOf && computerScore < bestOf) {
        computerChoice === 0
          ? (computerChoice = "rock")
          : computerChoice === 1
          ? (computerChoice = "paper")
          : (computerChoice = "scissors");

        // Updating the result box

        displayPlayerScore.textContent = `Player: ${playerChoice.toUpperCase()}`;
        displayComputerScore.textContent = `Computer: ${computerChoice.toUpperCase()}`;
        displayResult.textContent = `${result}`;

        displayResultBox.appendChild(displayPlayerScore);
        displayResultBox.appendChild(displayComputerScore);
        displayResultBox.appendChild(displayResult);
      } else {
        if (computerScore > playerScore) {
          displayResultBox.textContent = "Computer Wins!!!!";
          displayResultBox.style.fontSize = "30px";
        } else {
          displayResultBox.textContent = "Player Wins!!!!";
          displayResultBox.style.fontSize = "30px";
        }
        return;
      }
    });
  });
}


getPlayerChoice();

