let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random()*3;
    if (choice < 1) {
        return "ROCK";
    } else if (choice < 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?").toUpperCase();
    return choice
}

function round() {
    let human = getHumanChoice();
    console.log(human);
    let computer = getComputerChoice();
    console.log(computer);

    if (human === "ROCK") {
        if (computer === "PAPER") {
            // computer wins
            computerScore += 1;
            console.log("You lose! Paper beats Rock!");
        } else if ( computer === "SCISSORS") {
            // human wins
            humanScore += 1;
            console.log("You win! Rock beats Scissors!");
        } else {
            console.log("It's a tie!");
        }
    } else if (human === "PAPER") {
        if (computer === "SCISSORS") {
            // computer wins
            computerScore += 1;
            console.log("You loose! Scissors beats Paper!");
        } else if (computer === "ROCK") {
            // human wins
            humanScore += 1;
            console.log("You win! Paper beats Rock!");
        } 
    } else {
        if (computer === "ROCK") {
            // computer wins
            computerScore += 1;
            console.log("You lose! Rock beats Scissors!")
        } else if (computer === "PAPER") {
            // human wins
            humanScore += 1;
            console.log("You win! Scissors beats Paper")
        }
    }
}

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        round();
    }

    if (humanScore > computerScore) {
        console.log(`You beat the computer! ${humanScore} : ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost to the computer! ${humanScore} : ${computerScore}`);
    } else {
        console.log(`It's a tie! ${humanScore} : ${computerScore}`);
    }

}

game(5);