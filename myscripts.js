const buttons = document.querySelectorAll('input')


function game() {
    var playerscore = 0
    var compscore = 0

    var rounds = 0;
    while (rounds < 5) {
        // var player = prompt("Rock, Paper, or Scissors? ")

        if (playRound(player, computerPlay()) === "player") {
            playerscore+=1;
            
        }
        else if (playRound(player, computerPlay()) === "tie") {
            ;
        }
        else if (playRound(player, computerPlay()) === "comp") {
            score[1] += 1;

        }

        rounds += 1;
        console.log("The score is: " + score)
    }

    if (score[0] > score[1]) {
        console.log("You Win! The score was " + score[0] + " vs " + score[1]);
        }   
    else if (score[0] < score [1]){
        console.log("You lose! The score was " + score[0] + " vs " + score[1]);
        }
    else {
        console.log("You both had " + score[0] + "points. It's a tie!");

    }
}


function playRound(playerSelection, computerSelection){
    // var playerSelection = prompt("insert your thing");

    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();
    // player wins
    if ((player === "rock" && computer === "scissors")||(player === "paper" && computer === "rock")||(player === "scissors" && computer === "paper")) {
        return "player"
    }
    // game ties
    else if (player===computer){
        return "tie"
    }
    // computer wins
    else {
        return "comp"
    }
}




function computerPlay() {
    var gen = Math.floor(Math.random() * 3);
    switch (gen) {
        case 0: 
            return ("Rock");
            break;
        case 1: 
            return ("Paper");
            break;
        case 2: 
            return ("Scissors");
            break;
    }
}

// this is just a function to capitalize first letter of a word
function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }




game();

// const playerSelection = "ROCK";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection , computerSelection));
