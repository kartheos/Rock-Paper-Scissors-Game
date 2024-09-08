const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissor');
const GameFeedback = document.querySelector('#GameFeedback');
const PlayerScore = document.querySelector('#PlayerScore');
const ComputerScore = document.querySelector('#ComputerScore');
const ScoreWinner = document.querySelector('#Winner');
const restart = document.querySelector('#PlayAgain');

let playerScore = 0;
let computerScore = 0;

const pick = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return pick[Math.floor(Math.random() * pick.length)]
   
}


const PlayRound = (playerSelection, computerSelection) => {

    playerSelection = playerSelection.toLowerCase(); 
      if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return "Invalid Input!";
    }
};


const ScoreUpdate = () => {
    PlayerScore.textContent = `The player score is: ${playerScore}`;
    ComputerScore.textContent = `The computer score is: ${computerScore}`;
    GameOverStatus();
};


let GameOverStatus = () => {
    if (playerScore === 5) {
        ScoreWinner.textContent = "The player wins the game!";
        rock.setAttribute("disabled", 'true'); 
        paper.setAttribute("disabled", 'true');
        scissors.setAttribute("disabled", 'true');
    } else if (computerScore === 5) {
        ScoreWinner.textContent = "The computer wins the game!";
        rock.setAttribute("disabled", 'true');
        paper.setAttribute("disabled", 'true');
        scissors.setAttribute("disabled", 'true');
    } else {
        ScoreWinner.textContent = "";
        if (rock && paper && scissors) { 
            rock.removeAttribute("disabled");
            paper.removeAttribute("disabled");
            scissors.removeAttribute("disabled");
        }      
    }
};

let restartGame = () => {

    rock.setAttribute("disabled", 'true'); 
    paper.setAttribute("disabled", 'true');
    scissors.setAttribute("disabled", 'true');

    playerScore = 0;
    computerScore = 0;

    PlayerScore.textContent = '';
    ComputerScore.textContent = '';
    ScoreWinner.textContent = "";
    GameFeedback.textContent = "";

    rock.removeAttribute("disabled");
    paper.removeAttribute("disabled");
    scissors.removeAttribute("disabled");

};

restart.addEventListener ('click', () => {
    restartGame();
});  


rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    const result = PlayRound(playerSelection, computerSelection);
    GameFeedback.textContent = result;
    ScoreUpdate();
});


paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    const result = PlayRound(playerSelection, computerSelection);
    GameFeedback.textContent = result;
    ScoreUpdate();
});

scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    const result = PlayRound(playerSelection, computerSelection);
    GameFeedback.textContent = result;
    ScoreUpdate();
});