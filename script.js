function getComputerChoice() {
  let x = Math.floor((Math.random() * 3) + 1);

  if (x === 1) {
    return "Rock";
  } else if (x === 2) {
    return "Paper";
  } else {
    return "Scissors"
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
      if (computerSelection === "Rock") {
        return "Draw!";
      } else if (computerSelection === "Paper") {
        return "You lose! Paper beats Rock!";
      } else {
        return "You win! Rock beats Scissors!";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "Rock") {
        return "You win! Paper beats Rock!";
      } else if (computerSelection === "Paper") {
        return "Draw!";
      } else {
        return "You lose! Scissors beat Paper!";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "Rock") {
        return "You lose! Rock beats Scissors!";
      } else if (computerSelection === "Paper") {
        return "You win! Scissors beats Paper!";
      } else {
        return "Draw!";
      }
    } else {
      return "Please enter a valid choice!"
    }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result = "";

  for (let i = 0; i < 5; i++) {
    result = playRound(prompt("Rock Paper Scissors?"), getComputerChoice());
    if (result.includes("win")) {
      playerScore += 1;
    } else if (result.includes("lose")) {
      computerScore += 1;
    } else {
      continue;
    }

    console.log(result);
  }

  if (playerScore > computerScore) {
    return "Player wins the game!";
  } else if (computerScore > playerScore) {
    return "Player loses the game...";
  } else {
    return "Draw?";
  }
}

console.log(game());
