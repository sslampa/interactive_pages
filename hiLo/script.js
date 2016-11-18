
function randomNum() {
  return Math.floor(Math.random() * 100 + 1);
}

function checker(inputGuess, randValue) {
  if (inputGuess > randValue) {
    alert("Your guess is too high.");
    return false;
  } else if (inputGuess < randValue){
    alert("Your guess is too low.");
    return false;
  } else if (inputGuess === randValue) {
    alert("You guessed right!");
    return true;
  }
}

function game(){
  var rand = randomNum(); //will either be a new random number or 0
  var userInput = "";
  var end = false
  var x = 0;

  while (x < 7 && !end) {
      userInput = prompt("Enter your guess: ");
      end = checker(userInput, rand);
      alert(rand);
      if (parseInt(userInput) === rand) {
        break;
      }
      x++;
  }

  if (end === false) {
    document.getElementById("feedback").innerHTML = "You lose";
  } else {
    document.getElementById("feedback").innerHTML = "You win!";
  }
}
