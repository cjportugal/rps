console.log('hello');
function game() {
        
    for (let gameCount = 0; gameCount < 5; gameCount++) {    

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
            } else if (player ==='rock' && computer === 'scissor') {
                console.log('You Win! Rock beats scissor!')
            } else if (player === 'paper' && computer === 'rock') {
                console.log('You Lose! Paper loses to rock!')
            } else if (player == 'paper' && computer =='scissor') {
                console.log("You Lose! Paper loses to scissor!")
            } else if (player === 'scissor' && computer === 'rock') {
                console.log('You Lose! Scissor loses to rock!')
            } else if (player === 'scissor' && computer === 'paper') {
                console.log('You Win! Scissor beats paper!')
            } else {
                console.log("It's a tieeeee!")           
            } 
        }

    console.log((gameCount + 1) + " game has been played")
    
    }
    
}