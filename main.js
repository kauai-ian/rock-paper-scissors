// play a game with 3 parameters: rock paper scissors.
// computer randomly chooses one of the 3. Math floor to round number. Math random to get random number between 0&1.
// prompt player to choose one of 3.
// if rock then win if scissor, else loose if paper
// if scissor then win if paper, else loose if rock
// if paper then win if rock, else loose if paper
// computer and player play 5 rounds.

const options = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * options.length); // this will allow everything to run without brackets. calculates random. reads better.
  const choice = options[randomChoice];
  // console.log("Computer chooses", choice);
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "tie") {
    return "It's a Tie!";
  } else if (result == "player") {
    scorePlayer++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else {
    scoreComputer++;
    return `You lose, computer wins, ${computerSelection} beats ${playerSelection}`;
  }
}

const rock = document.getElementById("js-rock");
const paper = document.getElementById("js-paper");
const scissors = document.getElementById("js-scissors");
const playerScoreElm = document.getElementById("js-playerScore");
const compScoreElm = document.getElementById("js-computerScore");
const $winnerElm = document.getElementById("js-winner");
const resetBtn = document.getElementById("js-resetBtn");

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  playerScoreElm.innerHTML = scorePlayer;
  compScoreElm.innerHTML = scoreComputer;
  if (scoreComputer === 5 || scorePlayer === 5) {
    const winner = scoreComputer === 5 ? "Computer" : "Player";
    $winnerElm.innerHTML = `Game Over, ${winner} wins!`;
    resetBtn.classList.remove("hidden");
  }
}
function resetGame() {
  console.log("reset called");
  scoreComputer = 0;
  scorePlayer = 0;
  $winnerElm.innerHTML = "";
  resetBtn.classList.add("hidden");
  playerScoreElm.innerHTML = 0;
  compScoreElm.innerHTML = 0;
}
resetBtn.addEventListener("click", resetGame);

rock.addEventListener("click", (evt) => {
  game("rock");
});
paper.addEventListener("click", (evt) => {
  game("paper");
});
scissors.addEventListener("click", (evt) => {
  game("scissors");
});
