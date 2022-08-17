/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let rpsbutton = document.getElementById(`rpsButton`);
let computerChoice; 
let newScore;


// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

let Choice = [`Rock`, `Paper`, `Scissors`];

const getComputerChoice = () => {
let ComputerRandom = Math.floor(Math.random() * Choice.length);
computerChoice = Choice[ComputerRandom];
return computerChoice;
};


function runningScore (){ 
  newScore = score + points;
 score = newScore; 
 console.log (newScore);
 document.getElementById(`running`).innerText=(newScore)
return newScore;

}

let score = 0;
function getResult(playerChoice, computerChoice) {
 
  if (playerChoice == computerChoice) {
    points = 0;
  }
  else if(playerChoice == "Rock" && computerChoice == "Scissors") {
    points = 1;
  }
  else if (playerChoice == "Paper" && computerChoice == "Rock") {
    points = 1;
  }
  else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    points = 1;
  }
 else { points = -1;   
 }
 runningScore();
   return points;

 
}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  if (score == -1) {
    console.log(`you lose`);
    document.getElementById(`result`).innerText=(`You Lose`);
  }
  else if ( score == 1){
    console.log(`you win`);
    document.getElementById(`result`).innerText=(`You Win`);
  }
  else {
    console.log(`draw`);
    document.getElementById(`result`).innerText=(`Draw`);
  }
  
  document.getElementById(`hands`).innerText=(`Player choice ${playerChoice} - Computer Choice ${computerChoice}.`);

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

getComputerChoice();
playGame();
getResult(playerChoice, computerChoice);
console.log([`player ${playerChoice}`]);
console.log([`computer ${computerChoice}`]);
console.log([points]);
showResult(points, playerChoice, computerChoice);

endGame()
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
const rpsButtons = document.querySelectorAll('.rpsButton');
//rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
rpsButtons.forEach(rpsButton => {
rpsButton.onclick = () => onClickRPS(rpsButton.value);
});
 

  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  document.querySelector(`.endGameButton`);
  endGameButton.onclick = () => {
  document.getElementById(`hands`).innerText=(``); 
  document.getElementById(`result`).innerText=(``); 
  document.getElementById(`running`).innerText=(``)
  newScore = 0;
  score = 0;
}
}

playGame();