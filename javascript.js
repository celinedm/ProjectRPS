let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = ["Rock" , "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * computerChoice.length) + 1;

    if (randomChoice === 1) {
        return "rock";
    }
    if (randomChoice === 2) {
        return "paper";
    }
    if (randomChoice === 3){
        return "scissors"; 
    }

    
}

function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        return "It's a tie";
    }

    if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            playerScore++;
            return "You won! Rock beats Scissors";
        }
        else if (computerSelection == "paper"){
            computerScore++;
            return "You lost! Paper beats Rock";
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            playerScore++;
            return "You won! Paper beats Rock";
        }
        else if (computerSelection == "scissors"){
            computerScore++;
            return "You lost! Scissors beats Paper";
        }
    }

    if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            computerScore++;
        return "You lost! Rock beats Scissors";
        }
        else if (computerSelection == "paper"){
            playerScore++;
            return "You won! Scissors beats Paper";
        }
    }



  }
  function game(){
    input = prompt("Choose your weapon");
    const playerSelection = input.toLowerCase();
    const computerSelection = getComputerChoice();
 
    playRound();
        return console.log(playRound(playerSelection, computerSelection));

    
  }

  function keepScore(){
    if (playerScore > computerScore){
        return "You won the battle! You scored " + playerScore
    }
    else if (computerScore > playerScore){
        return "You lost the war! The computer scored " + computerScore
    }

    else if (playerScore == computerScore){
        return "...how?"
    }

  }

  game();
  game();
  game();
  game();
  game();
 
  
 console.log(keepScore());
