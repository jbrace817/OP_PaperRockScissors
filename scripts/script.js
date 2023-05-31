/* 1. You will be playing against the computer. start with function getComputerChoice()
     1.a. getComputerChoice() will randomly return either Rock Paper or Scissors */
/* 2. create a function that plays a single round of Paper, Rock Scissors. 
     2.a. The function should take two parameters, the playerSelection and computerSelection and RETURNS a string that declares a winner. E.G ('You Lose! Paper beats Rock)
     2.b. Make sure function playerSelection parameter is case-insensitive. */
/* 3. Create a new function called game(). Use the previous function inside of game() to play a 5 round game that keeps score and reports a winner or loser at the end. */

//Create function getComputerChoice().

function getComputerChoice() {
  let weapon = ["paper", "rock", "scissors"];
  let i = Math.floor(Math.random(weapon) * 3);
  return weapon[i];
}
