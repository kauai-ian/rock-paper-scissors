// play a game with 3 parameters: rock paper scissors.
// computer randomly chooses one of the 3. Math floor to round number. Math random to get random number between 0&1.
// prompt player to choose one of 3.
// if rock then win if scissor, else loose if paper
// if scissor then win if paper, else loose if rock
// if paper then win if rock, else loose if paper
// computer and player play 5 rounds.

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * options.length); // this will allow everything to run without brackets. calculates random. reads better.
  const choice = options[randomChoice];
  // console.log("Computer chooses", choice);
  return choice;
}
getComputerChoice();

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
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose, computer wins, ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    let choice = prompt("Lets Play! Choose either rock, paper, or scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}
getPlayerChoice();

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!");
  for (i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("-----------------------");
    if (checkWinner(playerSelection, computerSelection) == "player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "computer") {
      scoreComputer++;
    }
  }
  console.log("Game is over");
  if (scorePlayer > scoreComputer) {
    console.log("Player was the winner");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer was the winner");
  } else if (scorePlayer == scoreComputer) {
    console.log("We have a tie game!");
  }
}
game();
