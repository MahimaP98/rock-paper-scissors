//step2: logic to get comupter choice
function getComputerChoice(){
    const randomChoice = ["rock", "paper", "scissor"];
    const randomChoiceIndex = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomChoiceIndex];
}

//step3: logic to get human choice
function getHumanChoice(humanChoiceInput){
    return humanChoiceInput.toLowerCase();
}


//step5: logic to play single round
function playRound(humanSelection, computerSelection){

     if((humanSelection === "paper") && (computerSelection === "paper") || 
    (humanSelection === "rock") && (computerSelection === "rock") || 
    (humanSelection === "scissor") && (computerSelection === "scissor")){
        // console.log("It's a tie!");
        return "Tie";
    }

    if((humanSelection === "rock") && (computerSelection === "scissor")){
        // console.log("Computer lose, Rock beats Scissor!");
        return "Human";
    }else if((humanSelection === "paper") && (computerSelection === "rock")){
        // console.log("Computer lose, Paper beats Rock!");
        return "Human";
    }else if((humanSelection === "scissor") && (computerSelection === "paper")){
        // console.log("Computer lose, Scissor beats Paper!");
        return "Human";
    }else{
        // console.log(`You lose, ${computerSelection} beats ${humanSelection}`);
        return "Computer";
    }
}

   let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;

function playGame(){
    let humanChoiceInput = prompt("Enter rock/paper/scissor: ",'');

    const humanSelection = getHumanChoice(humanChoiceInput);
    const computerSelection = getComputerChoice();
    // console.log(humanSelection, computerSelection);

    const roundWinner = playRound(humanSelection, computerSelection);
    // console.log(roundWinner);

       //step4: declare players score variables 
    if(roundWinner === "Computer"){
        computerScore++;
    }else if(roundWinner === "Human"){
        humanScore++;
    }else if(roundWinner === "Tie"){
        tieScore++;
    }

}

for(let i=1; i<=5; i++){
    playGame();
}

 if(computerScore > humanScore){
        console.log(`Computer Wins with ${computerScore} times`);
         console.log(`Round got tie ${tieScore}, and Human won with ${humanScore} times`);
    }else if(humanScore > computerScore){
        console.log(`Human Wins with ${humanScore} times`);
         console.log(`Round got tie ${tieScore}, and Computer won with ${computerScore} times`);
    }







