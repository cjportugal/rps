console.log('hello');
function game() {
    let computerWins = 0;
    let playerWins = 0;
    let gameWinner = false;

    do {    

    
        function getComputerChoice() {
            const gameChoices = ["rock", "paper", "scissor"];
            const randomChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
            return randomChoice;
        }
        const computerSelection = getComputerChoice();
        const playerSelection = window.prompt("Rock, Paper, or Scissor?");
        const finalPlayerSelection = playerSelection.toLowerCase();

        

        if (finalPlayerSelection == 'rock' || finalPlayerSelection == 'scissor' || finalPlayerSelection == 'paper') {
            gameRound(finalPlayerSelection, computerSelection)
        } else {
            console.log('notnice');
        }


        function gameRound (player, computer) {
            if (player === 'rock' && computer === 'paper') {
                console.log('You Lose! Paper Beats rock')
                computerWins++;
            } else if (player ==='rock' && computer === 'scissor') {
                console.log('You Win! Rock beats scissor!')
                playerWins++;
            } else if (player === 'paper' && computer === 'rock') {
                console.log('You Win! Paper beats to rock!')
                playerWins++;
            } else if (player == 'paper' && computer =='scissor') {
                console.log("You Lose! Paper loses to scissor!")
                computerWins++;
            } else if (player === 'scissor' && computer === 'rock') {
                console.log('You Lose! Scissor loses to rock!')
                computerWins++;
            } else if (player === 'scissor' && computer === 'paper') {
                console.log('You Win! Scissor beats paper!')
                playerWins++;
            } else {
                console.log("It's a tieeeee!")           
            } 
            console.log( playerWins + " games you have won")
            console.log( computerWins + " computer have won")
            console.log(gameWinner)
        }

        if (playerWins == 5 ) {
            gameWinner = true;
            console.log("You Won!")
        } else if (computerWins == 5) {
            gameWinner = true;
            console.log("Lost!")
        }

 
    
    } while (gameWinner == false);
    
}