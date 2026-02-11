let userScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#computer-score'); 
let visible = document.querySelector(".msg-container");
let visibleRestart = document.querySelector(".restart-container");

const generateComputerChoice = () => {
     const options = ["rock", "paper", "scissor"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
}

const drawGame = () => {
    msg.innerText ="Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
  
    }

    // Check final winner
    if (userScore === WINNING_SCORE) {
        msg.innerText = "🎉 You won the game! Click Restart to play again.";
        msg.style.backgroundColor = "darkgreen";
        disableChoices();
        showRestartButton();
    } 
    else if (computerScore === WINNING_SCORE) {
        msg.innerText = "💻 Computer won the game! Click Restart to try again.";
        msg.style.backgroundColor = "darkred";
        disableChoices();
        showRestartButton();
    }

}

const disableChoices = () => {
    choices.forEach(choice => {
        choice.style.pointerEvents = "none";
    });
};

const enableChoices = () => {
    choices.forEach(choice => {
        choice.style.pointerEvents = "auto";
    });
};

const playGame = (userChoice) => {
    // console.log("playGame function is called with userChoice:", userChoice);
    const computerChoice = generateComputerChoice();
    // console.log("Computer choice: ", computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock" ){
            //scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissor
            userWin = computerChoice === "scissor" ? false : true;
        }   else{ 
            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);    
    }

}

const restartGame = () => { 
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
    msg.innerText = "Game restarted. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showRestartButton = () => {
  let restartBtn = document.querySelector("#restart-btn");

    if (!restartBtn) {
        restartBtn = document.createElement("button");
        restartBtn.id = "restart-btn";
        restartBtn.innerText = "Restart Game";
        restartBtn.style.marginTop = "20px";

        restartBtn.addEventListener("click", () => {
            restartGame();
            enableChoices();
            restartBtn.remove();
        });

        msg.parentElement.appendChild(restartBtn);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
    })
})




