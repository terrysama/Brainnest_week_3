const choices = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;
let maxRound = 5;

game();



// Game rules and logic
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();

    if(playerSelection === computerSelection){
        result = `It's a ${computerSelection} tie!`
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            result = "You lose! Paper beats Rock";
            computerScore++;
        } else{
            result = "You win! Rock beats Scissors";
            playerScore++;
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            result = "You lose! Scissors beats Paper";
            computerScore++;
        } else{
            result = "You win! Paper beats Rock";
            playerScore++;
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            result = "You lose! Rock beats Scissors";
            computerScore++;
        } else{
            result = "You win! Scissors beats Paper";
            playerScore++;
        }
    }
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(result);
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    console.log('*****')
}


// Creating random choice for the computer
function computerPlay(){
    var random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function game(){
    for(let i = 0; i < maxRound; i++){        
        playerSelection = prompt('Rock Paper Scissors?').toLowerCase();
        playRound(playerSelection, computerSelection);
    }
    // Match outcome
    if(playerScore == computerScore){
        match = 'Draw!';
    }
    else if(playerScore > computerScore){
        match = 'Player Wins!';
    } else {
        match = 'Computer Wins!';
    }
    console.log(match);
    return match;
}




// function playRound(playerSelection, computerSelection){
//     playerSelection = prompt('Rock Paper Scissors?').toLowerCase();
//     computerSelection = computerPlay();

//     if(playerSelection === computerSelection){
//         result = "It's a " + computerSelection + " tie!"
//     }
//     if(playerSelection == "rock" && computerSelection == "paper"){
//         result = "You lose! Paper beats Rock"
//         }
//     if(playerSelection == "rock" && computerSelection == "scissors"){
//         result = "You win! Rock beats Scissors"
//     }
//     if(playerSelection == "paper" && computerSelection == "scissors"){
//         result = "You lose! Scissors beats Paper"
//     } 
//     if(playerSelection == "paper" && computerSelection == "rock"){
//         result = "You win! Paper beats Rock"        
//     }
//     if(playerSelection == "scissors" && computerSelection == "rock"){
//             result = "You lose! Rock beats Scissors"
//         }     
//     if(playerSelection == "scissors" && computerSelection == "paper"){
//             result = "You win! Scissors beats Paper"
//     }

//     console.log(playerSelection);
//     console.log(computerSelection);
//     return result;
// }
