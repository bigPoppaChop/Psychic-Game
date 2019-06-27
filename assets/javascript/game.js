// ==================
// 
// alphabet array to compare guess against
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Game data
var chances = 10;
var wins = 0;
var losses = 0;
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("I am thinking of the letter " + "`" + computerGuess + "` and you're a cheater");


var directionsText = document.getElementById("instructions");
var userChoiceText = document.getElementById("userGuess");
var resultText = document.getElementById("guessResult");
var chancesText = document.getElementById("chances");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

document.onkeyup = function(event){
  var guess =  event.key.toLocaleLowerCase();  
  console.log("User Guess: " + guess);
  var letterCheck = alphabet.indexOf(guess)
  // Checking the key pressed exists in the alphabet array
 
  // Win Condition
  if (guess === computerGuess){
    
    wins++;
    userChoiceText.textContent = "Your Guess: " + guess;
    resultText.textContent = "Result: CORRECT!"
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    alert("YOU WIN! Press OK to play again!");

    // Reset the game after a win
    chances = 10
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("I am thinking of the letter " + "`" + computerGuess + "` and you're a cheater");
    
  }
  // Check key pressed is a letter
  else if (letterCheck === -1){
    alert("Only guess letters please.")

  }
  //
  else{
    chances = chances - 1;
    userChoiceText.textContent = "Your Guess: " + guess;
    resultText.textContent = "Result: WRONG!"
    chancesText.textContent = "Remaining Guesses: " + chances;
    if (chances === 0){
      alert("YOU LOSE! PRESS OK TO PLAY AGAIN");
      losses++;
      resultText.textContent = "Result: YOU LOST!";
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;

      // Reset the game after a loss
      computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("I am thinking of the letter " + "`" + computerGuess + "` and you're a cheater");
      chances = 10
      chancesText.textContent = "Remaining Guesses: " + chances;
    }
  }
}




  