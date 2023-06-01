/* 1. You will be playing against the computer. start with function getComputerChoice()
     1.a. getComputerChoice() will randomly return either Rock Paper or Scissors */
/* 2. create a function that plays a single round of Paper, Rock Scissors. 
     2.a. The function should take two parameters, the playerSelection and computerSelection and RETURNS a string that declares a winner. E.G ('You Lose! Paper beats Rock)
     2.b. Make sure function playerSelection parameter is case-insensitive. */
/* 3. Create a new function called game(). Use the previous function inside of game() to play a 5 round game that keeps score and reports a winner or loser at the end. */

//1. Create function getComputerChoice().

function getComputerChoice() {
  let weapon = ["Paper", "Rock", "Scissors"];
  let randomItem = weapon[Math.floor(Math.random() * weapon.length)];
  return randomItem;
}

//2. Play a single round of Paper, Rock, Scissors (PRS).

function playRound(playerSelection, computerSelection) {
  //Draw
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    alert(
      `Draw. Computer chose ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`
    );
    playerSelection = prompt("Choose paper, rock or scissors:");
    return playRound(playerSelection, getComputerChoice());
    //Paper vs. Rock.
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You Win! Paper beats Rock.";
    //Rock vs. Scissors.
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You Win! Rock beats Scissors.";
    //Scissors vs. Paper
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You Win! Scissors beat paper.";
    //All other scenario's Computer wins.
  } else {
    return `You Lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }.`;
  }
}

//Iterate a number of games given.
function game(numberOfGames) {
  while (numberOfGames > 0) {
    let playerSelection = prompt("Choose paper, rock or scissors:");
    console.log(playRound(playerSelection, getComputerChoice()));
    /* **USE BODY FOR OUTPUT**
    let br = document.createElement("br");
    let result = document.createTextNode(
      playRound(playerSelection, getComputerChoice())
    );
    document.querySelector("body").appendChild(result);
    document.querySelector("body").appendChild(br); 
    */
    numberOfGames--;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    game(5);
  }, 200);
});
