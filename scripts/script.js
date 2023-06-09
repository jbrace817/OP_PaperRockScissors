/* 1. You will be playing against the computer. start with function getComputerChoice()
     1.a. getComputerChoice() will randomly return either Rock Paper or Scissors */
/* 2. create a function that plays a single round of Paper, Rock Scissors. 
     2.a. The function should take two parameters, the playerSelection and computerSelection and RETURNS a string that declares a winner. E.G ('You Lose! Paper beats Rock)
     2.b. Make sure function playerSelection parameter is case-insensitive. */
/* 3. Create a new function called game(). Use the previous function inside of game() to play a 5 round game that keeps score and reports a winner or loser at the end. */

/* Global Envionment */
//Div to display results and score.
const resultsContainer = document.createElement("div");
resultsContainer.style.border = "3px solid limegreen";
resultsContainer.style.display = "flex";
resultsContainer.style.flexWrap = "wrap";
resultsContainer.style.justifyContent = "center";
resultsContainer.style.height = "25vh";

//Div to display results
const results = document.createElement("div");
results.style.display = "flex";
results.style.justifyContent = "center";
results.style.alignItems = "center";
results.style.border = "1px solid red";
results.style.width = "31.25rem";
// results.style.marginRight = "6.25rem";
resultsContainer.appendChild(results);

//Score global variables
let player = 0;
let computer = 0;

//Div to display Score
const score = document.createElement("div");
score.style.display = "flex";
score.style.flexDirection = "column";
score.style.justifyContent = "center";
score.style.alignItems = "center";
const playerScore = document.createElement("div");
const computerScore = document.createElement("div");
playerScore.style.paddingLeft = "1rem";
computerScore.style.paddingLeft = "1rem";
playerScore.textContent = `Player Score: ${player}`;
computerScore.textContent = `Computer Score: ${computer}`;
score.style.border = "1px solid blue";
score.style.width = "15.625rem";
score.appendChild(playerScore);
score.appendChild(computerScore);
resultsContainer.appendChild(score);
document.body.appendChild(resultsContainer);

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
    return (results.textContent = `Draw. Computer chose ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`);
    //playerSelection = prompt("Choose paper, rock or scissors:");
    //return playRound(playerSelection, getComputerChoice());

    //Paper vs. Rock.
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    console.log(player++);
    playerScore.textContent = `Player Score: ${player}`;
    // return "You Win! Paper beats Rock.";
    return (results.textContent = "You Win! Paper beats Rock.");
    //Rock vs. Scissors.
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    console.log(player++);
    playerScore.textContent = `Player Score: ${player}`;
    return (results.textContent = "You Win! Rock beats Scissors.");
    //Scissors vs. Paper
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    console.log(player++);
    playerScore.textContent = `Player Score: ${player}`;
    return (results.textContent = "You Win! Scissors beat paper.");
    //All other scenario's Computer wins.
  } else {
    console.log(computer++);
    computerScore.textContent = `Computer Score: ${computer}`;
    return (results.textContent = `You Lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }.`);
  }
}

//Play the game by selecting the image/avatar/weapon
function weaponSelector() {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      let choice = e.target.id;
      playRound(choice, getComputerChoice());
    });
  });
}

//Iterate a number of games given.
// function game(numberOfGames) {
//   while (numberOfGames > 0) {
//     let playerSelection = prompt("Choose paper, rock or scissors:");
//     console.log(playRound(playerSelection, getComputerChoice()));
//     /* **USE BODY FOR OUTPUT**
//     let br = document.createElement("br");
//     let result = document.createTextNode(
//       playRound(playerSelection, getComputerChoice())
//     );
//     document.querySelector("body").appendChild(result);
//     document.querySelector("body").appendChild(br);
//     */
//     numberOfGames--;
//   }
// }

// window.addEventListener("DOMContentLoaded", function () {
//   setTimeout(function () {
//     game(5);
//   }, 200);
// });
window.addEventListener("DOMContentLoaded", weaponSelector);
