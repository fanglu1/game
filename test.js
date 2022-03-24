else if (hand1 == hands[0] && hand2 == hands[2]){
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