var wins = 0;
var losses = 0;
var guesses_left;
var guesses;
var keyToGuess;

function reset_game()
{
  guesses_left = 9;
  guesses = "";
  keyToGuess = String.fromCharCode(97+(Math.random()*26)); 
}

function guess(event)
{
  if (guesses_left < 1)
  {
    document.getElementById("keyToGuess").innerHTML = "["+keyToGuess+"]";
    losses++;
    reset_game();
    return;
  }

  if (event.key === keyToGuess)
  {
    wins++;
    reset_game();
    return;
  } 

  guesses_left--;
  guesses += event.key;

  document.getElementById("wins").innerHTML = "["+wins+"]";
  document.getElementById("losses").innerHTML = "["+losses+"]";
  document.getElementById("guesses_left").innerHTML = "["+guesses_left+"]";
  document.getElementById("guesses").innerHTML = "["+guesses+"]";
  document.getElementById("keyToGuess").innerHTML = "["+keyToGuess+"]";
}