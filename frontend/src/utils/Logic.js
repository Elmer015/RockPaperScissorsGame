const choice = ["Rock", "Paper", "Scissors"];

export function GetBotChoice(){
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

export function ResultCondition(player1Choice, player2Choice) {
    if(player1Choice === player2Choice){
        return "Draw!";
    }

    if((player1Choice === "Rock" && player2Choice === "Scissors") || (player1Choice === "Paper" && player2Choice === "Rock") || (player1Choice === "Scissors" && player2Choice === "Paper")){
        return "Player 1 wins!";
    }

    return "Player 2 wins!";
}