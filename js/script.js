let playerScore = 0;
let computerScore = 0;

for (let round = 1; round <= Infinity; round++) {
    if (playerScore == 5) {
        alert(`YOU WIN! \nFirst to get 5 after ${round} rounds.\nLet's Play Again`)
        break;
    } else if (computerScore == 5) {
        alert("YOU LOSE! \nLet's Play Again")
        break;
    }
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    playRound(computerSelection, playerSelection);
}

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "ROCK";
    } else if (random === 1) {
        return "PAPER";
    } else if (random === 2) {
        return "SCISSORS";
    }
}

function playerPlay() {
    let choice = prompt("Please enter your choice: \"ROCK, PAPER or SCISSORS\"");
    if (choice.toUpperCase() == "ROCK") {
        return "ROCK";
    } else if (choice.toUpperCase() == "PAPER") {
        return "PAPER";
    } else if (choice.toUpperCase() == "SCISSORS") {
        return "SCISSORS";
    } else {
        return choice;
    }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == "ROCK" && playerSelection == "ROCK" || computerSelection == "PAPER" && playerSelection == "PAPER" || computerSelection == "SCISSORS" && playerSelection == "SCISSORS") {
        playerScore += 0;
        computerScore += 0;
        alert(`We have a tie! Play again.\n
        Your Score: ${playerScore} vs Computer Score: ${computerScore}`);

    } else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
        playerScore += 1;
        alert(`You win! PAPER beats ROCK!\n
        Your Score: ${playerScore} vs Computer Score: ${computerScore}`);

    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        computerScore += 1;
        alert(`You lose! ROCK beats SCISSORS!\n
        Your Score: ${playerScore} vs Computer Score: ${computerScore}`);

    } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        computerScore += 1;
        alert(`You lose! PAPER beats ROCK!\n
        Your Score: ${playerScore} vs Computer Score: ${computerScore}`);

    } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
        playerScore += 1;
        alert(`You win! SCISSORS beats PAPER!\n
        Your Score: ${playerScore} vs Computer Score: ${computerScore}`);


    } else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        playerScore += 1;
        alert(`You win! ROCK beats SCISSORS!\n
        Your Score: ${playerScore} vs Computer Score: ${computerScore}`);

    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        computerScore += 1;
        alert(`You lose! SCISSORS beats PAPER!\n
        Your Score: ${playerScore} vs Computer Score: ${computerScore}`);

    } else {
        alert(`Error`);
    }
}

function restart() {
    computerSelection = "";
    playerSelection = "";
}



