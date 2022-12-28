
function pickDice() {
    var val = Math.floor((Math.random()) * 6) + 1

    return "images/dice"+val+".png"
}

console.log("Running")

var player1 = pickDice()
var player2 = pickDice()

var mainText = document.querySelector('h1')


document.getElementById("image1").setAttribute("src",player1)
document.getElementById("image2").setAttribute("src",player2) 


if (player1 > player2){
    console.log(player1)
    console.log(player2)
    mainText.innerText = "Player 1 Wins"
}
if (player2 > player1){
    console.log(player1)
    console.log(player2)
    mainText.innerText = "Player 2 Wins"
}

