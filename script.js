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

function check_game() {
  if (playerScore >= 5) {
    return "Player defeated Computer!";
  } else if (computerScore >= 5) {
    return "Computer defeated Player!";
  }
}

const score = document.querySelector("#score");
const player = document.querySelector("#player");
const bot = document.querySelector("#bot");

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerScore >= 5 || computerScore >= 5) {
    return check_game()
  }

  playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
      if (computerSelection === "Rock") {
        return "Draw!";
      } else if (computerSelection === "Paper") {
        computerScore++;
        bot.textContent = computerScore;
        return "You lose! Paper beats Rock!";
      } else {
        playerScore++;
        player.textContent = playerScore;
        return "You win! Rock beats Scissors!";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "Rock") {
        playerScore++;
        player.textContent = playerScore;
        return "You win! Paper beats Rock!";
      } else if (computerSelection === "Paper") {
        return "Draw!";
      } else {
        computerScore++;
        bot.textContent = computerScore;
        return "You lose! Scissors beat Paper!";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "Rock") {
        computerScore++;
        bot.textContent = computerScore;
        return "You lose! Rock beats Scissors!";
      } else if (computerSelection === "Paper") {
        playerScore++;
        player.textContent = playerScore;
        return "You win! Scissors beats Paper!";
      } else {
        return "Draw!";
      }
    } else {
      return "Please enter a valid choice!"
    }
}

//function game() {
  //let playerScore = 0;
  //let computerScore = 0;
  //let result = "";

  //if (playerScore > computerScore) {
    //return "Player wins the game!";
  //} else if (computerScore > playerScore) {
  //  return "Player loses the game...";
  //} else {
  //  return "Draw?";
  //}
//}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  score.textContent = playRound("rock", getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  score.textContent = playRound("paper", getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  score.textContent = playRound("scissors", getComputerChoice());
});
