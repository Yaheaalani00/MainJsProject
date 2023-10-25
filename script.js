document.addEventListener("DOMContentLoaded", function () {
    let wins = 0;
    let losses = 0;

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();

        // Display computer's choice with an image
        const computerChoiceImage = document.getElementById('computerChoiceImage');
        computerChoiceImage.src = `images/${computerChoice}.png`;  // Adjust the path here
        computerChoiceImage.alt = computerChoice;

        // Determine the winner
        let resultMessage = '';

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

        // Restart the game after the alert is closed
        setTimeout(() => {
            // Clear computer's choice image
            computerChoiceImage.src = '';
            computerChoiceImage.alt = '';
        }, 1000); // Increase the delay if needed
    }

    // Attach click event listeners to the choices
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
