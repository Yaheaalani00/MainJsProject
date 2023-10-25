/**
 * Load the DOM content
 */

document.addEventListener("DOMContentLoaded", function() {
    let wins = 0;
    let losses = 0;

/**
 * randomly get the computer's choice
 */
    function getComputerChoice() {
        let choices = ['rock', 'paper', 'scissors'];
        let randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];  
    }


/**
 * The games logic
 */

    function playGame(playerChoice) {
        let getComputerChoice = getComputerChoice();

        let getComputerChoiceImage = document.getElementById('computerChoiceImage');
        getComputerChoiceImage.src = `images/${getComputerChoice}.png`;
        getComputerChoiceImage.alt = getComputerChoice;

        let resultMessage = '';


/**
 * Game Rules
 */
        if (
            (playerChoice === 'rock' && getComputerChoice === 'scissors') ||
            (playerChoice === 'paper' && getComputerChoice === 'rock') ||
            (playerChoice === 'scissors' && getComputerChoice === 'paper')
        
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

        alert (resultMessage);

/**
 * Updates the score
 */

        document.getElementById('correct').innerText = wins;
        document.getElementById('incorrect').innerText = losses;

/**
 * Restart the game
 * Clears computers choice image
 */
        setTimeout(() => {
            ComputerChoiceImage.src = '';
            computerChoiceImage.alt = '';
        }, 1000)
    }

/**
 * click eventlisteners to the choicees.
 */
    let rockChoice = document.getElementById('rockChoice');
    let paperChoice = document.getElementById('paperChoice');
    let scissorsChoice = document.getElementById('scissorsChoice');

    if (rockChoice && paperChoice && scissorsChoice) {
        rockChoice.addEventListener('click', () => playGame('rock'))
        paperChoice.addEventListener('click', () => playGame('paper'))
        scissorsChoice.addEventListener('click', () => playGame('scissors'))
    } else {
        console.error('One or more choice elemens not found in the DOM')
    }

    

});


