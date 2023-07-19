function getComputerChoice(){
    let computerChoice = ["Rock" , "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * computerChoice.length) + 1;

    if (randomChoice === 1) {
        return "Rock";
    }
    if (randomChoice === 2) {
        return "Paper";
    }
    if (randomChoice === 3){
        return "Scissors"; 
    }

    
}

function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        return "It's a tie";
    }

    if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            return "You won! Rock beats Scissors";
        }
        else if (computerSelection == "paper"){
            return "You lost! Paper beats Rock";
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "You won! Paper beats Rock";
        }
        else if (computerSelection == "scissors"){
            return "You lost! Scissors beats Paper";
        }
    }

    if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
        return "You lost! Rock beats Scissors";
        }
        else if (computerSelection == "paper"){
            return "You won! Scissors beats Paper";
        }
    }



  }


  const playerSelection = "rock";
  const playerInsensitive = playerSelection.toLowerCase();
  console.log(`player selection: ` + playerInsensitive);
  const computerSelection = getComputerChoice();
  const computerInsensitive = computerSelection.toLowerCase();
  console.log(`computer selection: ` + computerInsensitive);
  console.log(playRound(playerInsensitive, computerInsensitive));
