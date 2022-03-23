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
        console.log("Its a tie!");
        result = "TIE";    
    }
    else if (hand1 == hands[0] && hand2 == hands[2]){
        result = player1.name;
        console.log(player1.name);
    }
    else if (hand1 == hands[0] && hand2 == hands[1]){
        console.log("Lebron wins!");
    }
    else if (hand1 == hands[1] && hand2 == hands[2]){
        console.log("Lebron wins!")
    }
    else if (hand1 == hands[1] && hand2 == hands[0]){
        console.log("Kobe wins!")
    }
    else if (hand1 == hands[2] && hand2 == hands[1]){
        console.log("Kobe wins!")
    }
    else if (hand1 == hands[2] && hand2 == hands[0]){
        console.log("Lebron wins!")
    }
    return     result;
}
console.log(playRound(player1,player2));