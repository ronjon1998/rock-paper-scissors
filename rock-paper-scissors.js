const arr = ["rock", "paper", "scissors"];
const finalResult = document.getElementById('finalResult');
const buttons = document.querySelectorAll('button');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const playerLiveScore = document.getElementById('playerLiveScore');
const computerLiveScore = document.getElementById('computerLiveScore');
console.log(finalResult)
let playerScore = 0;
let computerScore = 0;

function getRandomInt(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min) + min); 
};

function computerPlay() {
       return arr[getRandomInt(0,3)]
};

function playRockRound() {
       if (computerPlay() === "scissors") {playerScore++}
       if (computerPlay() === "paper") {computerScore++}
       if (playerScore === 5) {resultPlayerWin()}
       if (computerScore === 5) {resultComputerWin()}
};

function playPaperRound() {
       if (computerPlay() === "rock") {playerScore++}
       if (computerPlay() === "scissors") {computerScore++}
       if (playerScore === 5) {resultPlayerWin()}
       if (computerScore === 5) {resultComputerWin()}
};

function playScissorRound() {
       if (computerPlay() === "paper") {playerScore++}
       if (computerPlay() === "rock") {computerScore++}
       if (playerScore === 5) {resultPlayerWin()}
       if (computerScore === 5) {resultComputerWin()}
};

function resultPlayerWin() {
       finalResult.textContent = "You have defeated your opponent!! Congratulations!";
       disableButtons();
};

function resultComputerWin() {
       finalResult.textContent = "You have been defeated, come back next lunchtime to fight again";
       disableButtons();
};

function updatingPlayerScore() {
       playerLiveScore.textContent = "Your Score: " + playerScore;
};

function updatingComputerScore() {
       computerLiveScore.textContent = "Your Opponents Score: " + computerScore
};

buttons.onclick = updatingPlayerScore;
buttons.onclick = updatingComputerScore;

rockButton.onclick = playRockRound;
paperButton.onclick = playPaperRound;
scissorButton.onclick = playScissorRound;

buttons.forEach(button =>{
       button.addEventListener('click', function(){
           updatingPlayerScore()
       })
   });

buttons.forEach(button =>{
       button.addEventListener('click', function(){
           updatingComputerScore()
       })
   });

   function disableButtons() {
       buttons.forEach(elem => {
           elem.disabled = true
       })
   }
   


