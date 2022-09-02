console.log('hello');
const playRock = document.querySelector('button[type="rock"]');
const playPaper = document.querySelector('button[type="paper"]');
const playScissors = document.querySelector('button[type="scissor"]');


let computerWins = 0;
let playerWins = 0;
let gameWinner = false;




function game(finalPlayerSelection) {
    
        function getComputerChoice() {
            const gameChoices = ["rock", "paper", "scissor"];
            const randomChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
            return randomChoice;
        }
        const computerSelection = getComputerChoice();

        

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
            playerWinsDisplayP.innerHTML=`<p>Player Wins: ${playerWins}</p>`;
            console.log( computerWins + " computer have won")
            computerWinsDisplayP.innerHTML=`<p>Computer Wins: ${computerWins}</p>`;
        }

        if (playerWins == 5 ) {
            gameWinner = true;
            console.log("You Won!")
            resultsDiv.innerHTML="<p>You Won!</p>";
        } else if (computerWins == 5) {
            gameWinner = true;
            console.log("Lost!")
            resultsDiv.innerHTML="<p>You Lost Dude!</p>";
        }

 
    
}
let playerWinsDisplayP = document.querySelector("#playerwins");
let computerWinsDisplayP = document.querySelector("#computerwins");
let resultsDiv = document.querySelector("#results");



playerWinsDisplayP.innerHTML=`<p>Player Wins: ${playerWins}</p>`;
computerWinsDisplayP.innerHTML=`<p>Computer Wins: ${computerWins}</p>`;




playRock.addEventListener('click', function () {
    console.log('rock');
    game("rock");
})

playPaper.addEventListener('click', function () {
    console.log('paper');
    game("paper");
})

playScissors.addEventListener('click', function () {
    console.log('scissor');
    game("scissor");
})


