/**
 * loads the domcontent
 */

document.addEventListener("DOMContentLoaded", function () {

/**
 * Keeps track of wins and losses
 */
    let wins = 0;
    let losses = 0;

/**
 * Random choice for the computer
 */
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

/**
 * Game logic when a player makes a choice 
 */
    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();

/**
 * Shows what the computer picked
 */     
        const computerChoiceImage = document.getElementById('computerChoiceImage');
        computerChoiceImage.src = `images/${computerChoice}.png`;  // Adjust the path here
        computerChoiceImage.alt = computerChoice;

        
        let resultMessage = '';

/**
 * Rules of the game 
 * decides the outcome of each choice
 */
        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            resultMessage = `You win! Computer chose ${computerChoice}.`;
            wins++;
        } else if (
            (playerChoice === 'rock' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'rock')
        ) {
            resultMessage = `You lose! Computer chose ${computerChoice}.`;
            losses++;
        } else if (playerChoice === computerChoice) {
            resultMessage = `It's a tie! Both chose ${playerChoice}.`;
        }

        alert(resultMessage);

        document.getElementById('correct').innerText = wins;
        document.getElementById('incorrect').innerText = losses;

/**
 * Restarts the game
 */

        setTimeout(() => {
            
            computerChoiceImage.src = '';
            computerChoiceImage.alt = '';
        }, 1000); 
    }

/**
 * click event listeners for the players choice
 */
    const rockChoice = document.getElementById('rockChoice');
    const paperChoice = document.getElementById('paperChoice');
    const scissorsChoice = document.getElementById('scissorsChoice');

    if (rockChoice && paperChoice && scissorsChoice) {
        rockChoice.addEventListener('click', () => playGame('rock'));
        paperChoice.addEventListener('click', () => playGame('paper'));
        scissorsChoice.addEventListener('click', () => playGame('scissors'));
    } else {
        console.error('One or more choice elements not found in the DOM.');
    }
});
