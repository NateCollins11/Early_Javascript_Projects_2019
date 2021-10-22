var wallet = 50;
var wallet_message = "You have 50 dubloons";
function play_round(){
    var bet = document.getElementById("bet_amount").value;
    var P_card = Math.floor((Math.random())*12+1)
    var C_card = Math.floor((Math.random())*12+1)
    document.getElementById("P_card").innerHTML = P_card
    document.getElementById("C_card").innerHTML = C_card
    console.log(C_card)
    if (P_card > C_card){
        var win = true
        var wmess = "You won!"
        wallet = wallet + parseInt(bet)
    }
        else{
            var win = false;
            var wmess = "You lost, loser";
            wallet = wallet - bet;
        }
wallet_message = "You now have "+ wallet + ' dubloons'
document.getElementById("wallet").innerHTML = wallet_message;
document.getElementById("win_notice").innerHTML = wmess;
}