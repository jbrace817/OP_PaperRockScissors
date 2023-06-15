/* 1. You will be playing against the computer. start with function getComputerChoice()
     1.a. getComputerChoice() will randomly return either Rock Paper or Scissors */
/* 2. create a function that plays a single round of Paper, Rock Scissors. 
     2.a. The function should take two parameters, the playerSelection and computerSelection and RETURNS a string that declares a winner. E.G ('You Lose! Paper beats Rock)
     2.b. Make sure function playerSelection parameter is case-insensitive. */
/* 3. Create a new function called game(). Use the previous function inside of game() to play a 5 round game that keeps score and reports a winner or loser at the end. */

/* Global Envionment */
//Global Variables
const imageContainer = document.querySelector(".container");
const old = imageContainer.innerHTML;
const headerText = document.querySelector(".headerText");
const playAgainbtn = document.querySelector(".playAgain");

//Div to display results and score.
const resultsContainer = document.createElement("div");
// resultsContainer.style.border = "3px solid limegreen";
resultsContainer.style.display = "flex";
resultsContainer.style.flexDirection = "column";
resultsContainer.style.justifyContent = "space-around";

resultsContainer.style.flexWrap = "wrap";
// resultsContainer.style.justifyContent = "center";
resultsContainer.style.height = "25vh";
resultsContainer.style.backgroundColor = "black";

//Div to display results
const results = document.createElement("div");
results.style.display = "flex";
results.style.justifyContent = "center";
results.style.alignItems = "center";
// results.style.border = "8px solid #d8d8d8";
results.style.borderRadius = "5px";
// results.style.width = "31.25rem";
results.style.color = "#feda4a";
results.style.fontSize = "2rem";
results.style.flexGrow = "1";
// results.style.marginRight = "6.25rem";
resultsContainer.appendChild(results);

//Score global variables
let player = 0;
let computer = 0;

//Div to display Score
const score = document.createElement("div");
score.style.display = "flex";
// score.style.flexDirection = "column";
score.style.justifyContent = "space-around";
score.style.flexGrow = "1";
score.style.alignItems = "end";
const playerScore = document.createElement("div");
const computerScore = document.createElement("div");
playerScore.style.color = "#feda4a";
computerScore.style.color = "#feda4a";
playerScore.textContent = `Heroes: ${player}`;
computerScore.textContent = `AI: ${computer}`;
playerScore.style.fontSize = "5rem";
computerScore.style.fontSize = "5rem";
// score.style.border = "8px solid #d8d8d8";
score.style.borderRadius = "5px";
score.appendChild(playerScore);
score.appendChild(computerScore);
resultsContainer.appendChild(score);
document.body.appendChild(resultsContainer);

const mediaQuery = window.matchMedia("(max-width: 576px)");
if (mediaQuery.matches) {
  results.style.fontSize = "1.5rem";
  // score.style.marginLeft = "0";
  playerScore.style.fontSize = "3rem";
  computerScore.style.fontSize = "3rem";
  headerText.style.fontSize = "2rem";
}

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

    //Paper vs. Rock.
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    console.log(player++);
    playerScore.textContent = `Heroes: ${player}`;
    if (player === 5) {
      headerText.classList.remove("reverse");
      headerText.style.display = "block";
      headerText.innerText = "Heroes Win!";
      playAgainbtn.style.display = "block";
      imageContainer.innerHTML =
        '<img style="max-width: 100%" src="../images/PngItem_123472.png" />';
      playAgainbtn.addEventListener("click", playAgain);
    }
    // return "You Win! Paper beats Rock.";
    return (results.textContent = "You Win! Paper beats Rock.");
    //Rock vs. Scissors.
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    console.log(player++);
    playerScore.textContent = `Heroes: ${player}`;

    if (player === 5) {
      headerText.classList.remove("reverse");
      headerText.classList.add("forward");
      headerText.style.display = "block";
      headerText.innerText = "Heroes Win!";
      playAgainbtn.style.display = "block";
      imageContainer.innerHTML =
        '<img style="max-width: 100%" src="../images/theRock.gif" />';
      playAgainbtn.addEventListener("click", playAgain);
    }
    return (results.textContent = "You Win! Rock beats Scissors.");
    //Scissors vs. Paper
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    console.log(player++);
    playerScore.textContent = `Heroes: ${player}`;
    if (player === 5) {
      headerText.classList.remove("reverse");
      headerText.style.display = "block";
      headerText.innerText = "Heroes Win!";
      playAgainbtn.style.display = "block";
      imageContainer.innerHTML =
        '<img style="max-width: 100%" src="../images/scissors.gif" />';
      playAgainbtn.addEventListener("click", playAgain);
    }
    return (results.textContent = "You Win! Scissors beat paper.");
    //All other scenario's Computer wins.
  } else {
    console.log(computer++);
    computerScore.textContent = `AI: ${computer}`;

    if (computer === 5) {
      headerText.classList.remove("reverse");
      headerText.style.display = "block";
      playAgainbtn.style.display = "block";
      imageContainer.innerHTML =
        '<img width: 100%" src="../images/terminator.gif" />';
      // fadeIn(imageContainer, 0);
      headerText.innerText = "AI Wins";
      playAgainbtn.addEventListener("click", playAgain);
    }
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

//function to fade in elements
function fadeIn(element, timeInMs) {
  setTimeout(() => {
    element.style.visibility = "visible";
  }, timeInMs);
}

function playAgain() {
  headerText.style.display = "none";
  results.textContent = "";
  setTimeout(() => {
    headerText.style.display = "block";
    headerText.innerHTML = "Can you save humanity?";
  }, 500);
  computer = 0;
  player = 0;
  playerScore.textContent = `Heroes: ${player}`;
  computerScore.textContent = `AI: ${computer}`;
  playAgainbtn.style.display = "none";
  imageContainer.innerHTML = "none";

  setTimeout(() => {
    imageContainer.innerHTML = old;
    loadPage();
  }, 3000);
}

function loadPage() {
  const paperMario = document.getElementById("paper");
  const scissorHands = document.getElementById("scissors");
  const theRock = document.getElementById("rock");
  const headerText = document.querySelector(".headerText");

  fadeIn(theRock, 2000);
  fadeIn(paperMario, 2500);
  fadeIn(scissorHands, 3000);
  setTimeout(() => {
    headerText.classList.add("reverse");
  }, 4500);
  setTimeout(() => {
    headerText.style.display = "none";
  }, 8000);

  weaponSelector();
}

window.addEventListener("DOMContentLoaded", loadPage);
