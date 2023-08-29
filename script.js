const container = document.querySelector(".container");
const p = document.querySelector(".p");
const p2 = document.querySelector(".p2");
const img = document.querySelector("img");
const buttons = document.querySelectorAll("button");
const h1 = document.querySelector("h1");
let playerScore = 0;
let computerScore = 0;




buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        h1.textContent = ""      
        p.textContent = playRound(e.target.className);
        p2.textContent = `Your score is ${playerScore} and computer score is ${computerScore}!`;
        if (playerScore === 5) {
            h1.textContent = "YOU WON!"
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            h1.textContent = "COMPUTER WON!"
            playerScore = 0;
            computerScore = 0;
        }
        
        
    })
})










let getComputerChoice = () => {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];

}



let playRound = (playerSelection, computerSelection) => {
    
    computerSelection = getComputerChoice();
    // playerSelection = prompt("Your choice:");
    // playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let win = `You won! ${playerSelection} beats ${computerSelection}!`;
    let lost = `You lost! ${playerSelection} loses to ${computerSelection}!`;
    let tied = `You t(r)ied! ${playerSelection} cancels out ${computerSelection}!`; 
    if (computerSelection === playerSelection) {   
        img.src = "img/tie.png";
        return tied;     
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        img.src = "img/lost.png";
        ++computerScore;
        return lost;
    } else {
        img.src = "img/win.png";
        ++playerScore;
        return win;
    }
    
}

let game = (n) => {   
    for (let i = 1; i<= n; i++) {
        console.log(playRound());
    }
}


