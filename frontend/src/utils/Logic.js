const choice = ["Rock", "Paper", "Scissors"];

export function GetBotChoice(){
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

export function ResultCondition(player1Choice, botChoice){
    if(player1Choice === botChoice){
        return "Draw!";
    }

    if((player1Choice === "Rock" && botChoice === "Scissors") || (player1Choice === "Paper" && botChoice === "Rock") || (player1Choice === "Scissors" && botChoice === "Paper")){
        return "Player 1 wins!";
    }

    return "Bot wins!";
}