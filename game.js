let hands = ['rock', 'paper', 'scissors'];

function getHand() {
    let index = parseInt(Math.random()*10)%3;
    return hands[index];
}

let player1 = {
    name: 'Kobe',
    getHand: () => getHand(),
};
let player2 = {
    name: 'Lebron',
    getHand: () => getHand(),
};
function playRound(player1,player2) {
    let hand1 = player1.getHand();
    let hand2 = player2.getHand();
    let result ="";
    
    if (hand1 == hand2) {
        result = "TIE";    
    }
    else if (hand1 == hands[0] && hand2 == hands[2]){
        result = player1.name;
    }
    else if (hand1 == hands[0] && hand2 == hands[1]){
        result = player2.name;
    }
    else if (hand1 == hands[1] && hand2 == hands[2]){
        result = player2.name;
    }
    else if (hand1 == hands[1] && hand2 == hands[0]){
        result = player1.name;
    }
    else if (hand1 == hands[2] && hand2 == hands[1]){
        result = player1.name;
    }
    else if (hand1 == hands[2] && hand2 == hands[0]){
        result = player2.name;
    }
    return result;
}

console.log(playRound(player1,player2));

function playGame(player1,player2,playUntil){
    let playerCounter1 = playUntil;
    let playerCounter2 = playUntil;
    while(i = 0, i < 6)
}

   
   
   
    // let player1 = player1.name
    // let player2 = player2.name

    // let playUntil = 


