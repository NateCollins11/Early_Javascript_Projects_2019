var number = Math.random();
number = Math.floor(number * 20 + 1);
var tries = 5;
function game(x) {
  tries = tries - 1;
  var message = "You have 5 tries to guess my number";

  var close = Math.abs(number - x);

  var answer = x - number == 0 ? true : false;
  if (answer == true) {
    if (tries == 4) {
      message = "Wow! First Try!";
    } else if (tries == 0) {
      message = "Just in Time";
    } else {
      message = "You got it!";
    }
  } else if (close == 1) {
    message = "Almost";
  } else {
    message = "nope, " + tries + " tries left";
  }
  if (answer == false) {
    if (tries == 0) {
      message =
        "Aww Shucks, you ran out of lives! You really SUCK at this game, You worthless pile of garbage, the answer was " +
        number +
        "! How could you not see that?";
    }
  }
  if (tries < 0) {
    message = "You are out of tries, CHEATER!";
  }
  document.getElementById("message").innerHTML = message;
}
