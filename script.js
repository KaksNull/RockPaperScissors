let getComputerChoice = () => {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];

}



let playRound = (playerSelection, computerSelection) => {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Your choice:");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let won = `You won! ${playerSelection} beats ${computerSelection}!`;
    let lost = `You lost! ${playerSelection} loses to ${computerSelection}!`;
    let tied = `You tied! ${playerSelection} cancels out ${computerSelection}!`;
    if (computerSelection === playerSelection) {
        return tied;
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        return lost;
    } else {
        return won;
    }
}

let game = (n) => {   
    for (let i = 1; i<= n; i++) {
        console.log(playRound());
    }
}