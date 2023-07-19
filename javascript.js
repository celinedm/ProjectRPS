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

    if (playerSelection === "Rock"){
        if (computerSelection === "Scissors"){
            return "You won! Rock beats Scissors";
        }
        else if (computerSelection === "Paper"){
            return "You lost! Paper beats Rock";
        }
    }

    if (playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            return "You won! Paper beats Rock";
        }
        else if (computerSelection === "Scissors"){
            return "You lost! Scissors beats Paper";
        }
    }

    if (playerSelection === "Scissors"){
        if (computerSelection === "Rock"){
        return "You lost! Rock beats Scissors";
        }
        else if (computerSelection === "Paper"){
            return "You won! Scissors beats Paper";
        }
    }



  }


  const playerSelection = "Scissors";
  console.log(`player selection: ` + playerSelection);
  const computerSelection = getComputerChoice();
  console.log(`computer selection: ` + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
