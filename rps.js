function getComputerChoice(){
    random = getRandomInt(3)

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
    player = toLowerCase(playerSelection)

    if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")){
        return "You win because " + player + " beats " + computerSelection + "!"
    }

    else{
        return "You lose because " + computerSelection + " beats " + player + "!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));