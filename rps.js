const rockb = document.createElement("button");
rockb.textContent = "Rock!"
rockb.classList.add('rock');         
document.body.appendChild(rockb);

const paperb = document.createElement("button");
paperb.textContent = "Paper!"
paperb.classList.add('paper');    
document.body.appendChild(paperb);

const scissorsb = document.createElement("button");
scissorsb.textContent = "Scissors!"
scissorsb.classList.add('scissors');    
document.body.appendChild(scissorsb);

const display = document.createElement("div");
display.textContent = ` `;
document.body.appendChild(display);

let playerCounter = 0;
let compCounter = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button){
    button.addEventListener("click", function (e){
        let comp = getComputerChoice();
        let outcome = playRound(button.className, comp)

    if(outcome == 1){
        display.textContent = "You win because " + button.className + " beats " + comp + "!"
        playerCounter++
    }
    if(outcome == 2){
        display.textContent = "You tie! Same option!"
    }
    if(outcome == 3){
        display.textContent = "You lose because " + button.className + " beats " + comp + "!"
        compCounter++
    }

    });
});



/*rockb.addEventListener("click", function (e){
    outcome = playRound("Rock", getComputerChoice())
});

paperb.addEventListener("click", function (e){
   outcome = playRound("Paper", getComputerChoice())
});

scissorsb.addEventListener("click", function (e){
    outcome = playRound("Scissors", getComputerChoice())
});


function game(){
    let playerScore = 0;
    let compScore = 0;

    while (playerScore < 5 && compScore < 5){

    if (outcome == 1){
        display.textContent = "You win because " + playerSelection + " beats " + computerSelection + "!"
        playerScore++
    }

    if (outcome == 2){
        display.textContent = "You tie! Same option!"
    }

    if (outcome == 3){
        display.textContent = "You lose because " + computerSelection + " beats " + playerSelection + "!"
        compScore++
    }

    if (outcome == 4){
        display.textContent = "Choose a correct item!"
    }
}

if (playerScore == 5){
    display.textContent = "5 rounds won! You win!!"
}

if (compScore == 5){
    display.textContent = "5 rounds lost! Computer wins!!"
}

} */

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);

    if (random == 0){
        return "rock"
    }

    if (random == 1){
        return "scissors"
    }

    if (random == 2){
        return "paper"
    }
} 

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();

    if ((player == "rock" && computerSelection == "scissors") || (player == "paper" && computerSelection == "rock") || (player == "scissors" && computerSelection == "paper")){
        return 1;
    }

    else if (player == computerSelection){
        return "You tie! Same option!"
    }

    else if ((computerSelection == "rock" && player == "scissors") || (computerSelection == "paper" && player == "rock") || (computerSelection == "scissors" && player == "paper")){
        return "You lose because " + computerSelection + " beats " + playerSelection + "!"
    }

    else{
        return "Choose a correct item!"
    }
}




