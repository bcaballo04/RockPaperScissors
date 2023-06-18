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

function playRound(playerSelection, computerSelection, playerScore, compScore){
    let player = playerSelection.toLowerCase();

    if ((player == "rock" && computerSelection == "scissors") || (player == "paper" && computerSelection == "rock") || (player == "scissors" && computerSelection == "paper")){
        return 1
    }

    else if (player == computerSelection){
        return 2
    }

    else if ((computerSelection == "rock" && player == "scissors") || (computerSelection == "paper" && player == "rock") || (computerSelection == "scissors" && player == "paper")){
        return 3
    }

    else{
        return 4
    }
}


function game(){
    let playerScore = 0;
    let compScore = 0;

    while (playerScore < 5 || compScore < 5){

    let playerSelection = prompt("Choose rock, paper, or scissors!");
    let computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);


    if (outcome == 1){
        console.log("You win because " + playerSelection + " beats " + computerSelection + "!")
        playerScore++
    }

    if (outcome == 2){
        console.log("You tie! Same option!")
    }

    if (outcome == 3){
        console.log( "You lose because " + computerSelection + " beats " + playerSelection + "!")
        compScore++
    }

    if (outcome == 4){
        console.log("Choose a correct item!")
    }
}

if (playerScore == 5){
    console.log("5 rounds won! You win!!")
}

if (compScore == 5){
    console.log("5 rounds lost! Computer wins!!")
}

}

game();