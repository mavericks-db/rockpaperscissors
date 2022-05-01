const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const yourScore = document.getElementById('yourScore');
const compScore = document.getElementById('compScore');
const messageBoard = document.getElementById('messageBoard');
let playerSelection = '';
let playerScore = 0;
let computerSelection;
let computerScore = 0;

function computerPlay() {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    computerSelection = 'ROCK';
    return computerSelection;
  }
  if (random === 1) {
    computerSelection = 'PAPER';
    return computerSelection;
  }
  if (random === 2) {
    computerSelection = 'SCISSORS';
    return computerSelection;
  }
  return null;
}

function restart() {
  computerSelection = '';
  playerSelection = '';
  playerScore = 0;
  computerScore = 0;
}

function checkScores() {
  if (playerScore === 5) {
    messageBoard.textContent = 'You Win!';
    restart();
  } else if (computerScore === 5) {
    messageBoard.textContent = 'You Lose!';
    restart();
  }
}

function playRound(computerSelection, playerSelection) {
  if ((computerSelection === 'ROCK' && playerSelection === 'ROCK') || (computerSelection === 'PAPER' && playerSelection === 'PAPER') || (computerSelection === 'SCISSORS' && playerSelection === 'SCISSORS')) {
    playerScore += 0;
    computerScore += 0;
    yourScore.textContent = playerScore;
    compScore.textContent = computerScore;
    messageBoard.textContent = "It's a tie!";
  } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
    playerScore += 1;
    yourScore.textContent = playerScore;
    compScore.textContent = computerScore;

    messageBoard.textContent = 'You win! PAPER beats ROCK!';
  } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
    computerScore += 1;
    yourScore.textContent = playerScore;
    compScore.textContent = computerScore;

    messageBoard.textContent = 'You lose! ROCK beats SCISSORS!';
  } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
    computerScore += 1;
    yourScore.textContent = playerScore;
    compScore.textContent = computerScore;

    messageBoard.textContent = 'You lose! PAPER beats ROCK!';
  } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
    playerScore += 1;
    yourScore.textContent = playerScore;
    compScore.textContent = computerScore;

    messageBoard.textContent = 'You win! SCISSORS beats PAPER!';
  } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
    playerScore += 1;
    yourScore.textContent = playerScore;
    compScore.textContent = computerScore;

    messageBoard.textContent = 'You win! ROCK beats SCISSORS!';
  } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
    computerScore += 1;
    yourScore.textContent = playerScore;
    compScore.textContent = computerScore;

    messageBoard.textContent = 'You lose! SCISSORS beats PAPER!';
  } else {
    messageBoard.textContent = 'Error';
  }
}

function playerPlay(playerChoice) {
  playerSelection = playerChoice;
  const computerSelection = computerPlay();
  playRound(computerSelection, playerSelection);
  checkScores();
}

rockBtn.addEventListener('click', () => playerPlay('ROCK'));
paperBtn.addEventListener('click', () => playerPlay('PAPER'));
scissorsBtn.addEventListener('click', () => playerPlay('SCISSORS'));
