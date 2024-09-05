const pick = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return pick[Math.floor(Math.random() * pick.length)]
   
}

function playerChoice(){
    let validateInput = false;

    while(validateInput == false){

        const choice = prompt("Start the game by picking among 'Rock, Paper, Scissors'", "" ).toLowerCase();
        if (choice == null) {
            continue;
        }
        if(pick.includes(choice)){
            validateInput = true;
            return choice;
        }
    }

 }

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection, computerSelection);

    if(playerSelection === computerSelection){
        return `Its tie! You both picked ${playerSelection}`;

    } else if ((playerSelection === "rock" && computerSelection === "scissors")  ||
              (playerSelection === "scissors" && computerSelection === "paper") ||
              (playerSelection === "paper" && computerSelection === "rock"))  {

                return `You won, ${playerSelection} beats ${computerSelection}`;  
              }
    else {
        return `You lost, ${computerSelection} beats ${playerSelection}`;
        
    }
    
 }
 
 function checkWinner(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return `tie`;

    } else if ((playerSelection === "rock" && computerSelection === "scissors")  ||
              (playerSelection === "scissors" && computerSelection === "paper") ||
              (playerSelection === "paper" && computerSelection === "rock"))  {

                return `player`;  
              }
    else {
        return `pc`;  
    }

 }


function game(){
    
let scorePlayer = 0;
let scoreComputer = 0;

    for(let i = 0; i < 5; i++){
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log("--------")

        if(checkWinner(playerSelection, computerSelection) == `player`){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == `pc`){
            scoreComputer++;
        }
    }

    if (scorePlayer > scoreComputer){
        console.log(`The player won! Result: player score = ${scorePlayer} vs  computer score = ${scoreComputer}`);
    }
    else  if (scorePlayer < scoreComputer){
        console.log(`The computer won! Result: player score = ${scorePlayer} vs  computer score = ${scoreComputer}`);
    }
    else {
        console.log(`Was a tie! Result: player score = ${scorePlayer} vs  computer score = ${scoreComputer}`);

    }
 }

console.log(game());


