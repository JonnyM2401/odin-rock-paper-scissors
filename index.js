// get coice of computer
function getComputerChoice() {
    // getComputerChoice()
    // use Math.random()
    const computerChoice = Math.floor(Math.random()*3);
    // test output
    return computerChoice;
}

// get human coice
function getHumanChoice() {
    const choices = {Rock : 0, Paper: 1, Scissors : 2};
    // use promt()
    let humanChoiceStr = prompt("Choose Rock, Paper or Scissors");
    // make it case-insensitive
    humanChoiceStr = humanChoiceStr[0].toUpperCase() + humanChoiceStr.slice(1).toLowerCase();
    // test output
    return choices[humanChoiceStr];
}

// play single round
function playRound() {
    const choices = {0 : "Rock", 1 : "Paper", 2 : "Scissors"};
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    let computerPoint = 0;
    let humanPoint = 0;
    
    // function playRound(humanChoice, computerChoice)
    // representing the round winner, such as: “You lose! Paper beats Rock”.
    let winner = (humanChoice - computerChoice + 3) % 3;
    console.log("You chose: " + choices[humanChoice]);
    console.log("Computer chose: " + choices[computerChoice]);
    // update Score an show result
    if(winner === 0) {
        console.log("It's a tie!");
    } else if(winner === 1) {
        console.log(`You win! ${choices[humanChoice]} beats ${choices[computerChoice]}.`);
        humanPoint += 1;
    } else if(winner === 2) {
        console.log(`You lose! ${choices[computerChoice]} beats ${choices[humanChoice]}.`);
        computerPoint += 1;
    } else {
        console.log("Invalid input!");
    }
    return {
        cp : computerPoint,
        hp : humanPoint
    };
}

function playGame(rounds) {
    // create humanScore & computerScore, initValue = 0;
    let computerScore = 0;
    let humanScore = 0;
    
    for(let i = 0; i < rounds; i++ ) {
        const result = playRound(computerScore, humanScore);
        // console.log(result);
        computerScore += result["cp"];
        humanScore += result["hp"];
        console.log("Score:");
        console.log("You: " + humanScore);
        console.log("Computer: " + computerScore);
        console.log("");
    }
    if(humanScore > computerScore) {
        console.log("Overall Win! :D")
    } else if(humanScore < computerScore) {
        console.log("Overall loss! :(")
    } else {
        console.log("It's an overall tie! gg")
    }
}
playGame(5);


