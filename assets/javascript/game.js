// ==================
// 
// alphabet array to compare guess against
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Game data
var chances = 10;
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
// log win condition for debugging
console.log("I am thinking of the letter " + "`" + computerGuess + "` and you're a cheater");

// Var's to hold HTML elements
var directionsText = document.getElementById("instructions");
var userChoiceText = document.getElementById("userGuess");
var resultText = document.getElementById("guessResult");
var lettersGuessedText = document.getElementById("allGuesses");
var chancesText = document.getElementById("chances");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");


document.onkeyup = function(event){
  var guess =  event.key.toLocaleLowerCase();  
  console.log("User Guess: " + guess);
  var letterCheck = alphabet.indexOf(guess)
   
  // Pressed Key is correct Condition
  if (guess === computerGuess){
    // +1 to win counter
    wins++;
    // Update HTML 
    userChoiceText.textContent = "Your Guess: " + guess;
    resultText.textContent = "Result: CORRECT!"
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;

    // Alert the win, pressing OK resets the game
    alert("YOU WIN! Press OK to play again!");
    chances = 10
    chancesText.textContent = "Remaining Guesses: " + chances;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("I am thinking of the letter " + "`" + computerGuess + "` and you're a cheater");
    
    // Clear the guessed letters
    lettersGuessed = [];
    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
  }

  //If pressed key is not in alphabet array
  else if (letterCheck === -1){
    alert("Only guess letters please.");

  }
  // If pressed key has already been guessed
  else if (lettersGuessed.indexOf(guess) != -1 ){
    alert("You've already guessed that key");

  }
  // If pressed key is not correct condition
  else{
    // Decrease number of chances
    chances = chances - 1;
    // Add letter guessed to lettersGuessed array
    lettersGuessed.push(guess);
    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;

    // Update rest of page text
    userChoiceText.textContent = "Your Guess: " + guess;
    resultText.textContent = "Result: Wrong letter!"
    chancesText.textContent = "Remaining Guesses: " + chances;
    
    // When user runs out of chances
    if (chances === 0){
      losses++;
      resultText.textContent = "Result: YOU LOST!";
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;
      

      // Alert user of the losee
      alert("YOU LOSE! PRESS OK TO PLAY AGAIN");

      // Generate new game data after user clears alert
      computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("I am thinking of the letter " + "`" + computerGuess + "` and you're a cheater");
      chances = 10
      chancesText.textContent = "Remaining Guesses: " + chances;
      // Clear the guessed letters
      lettersGuessed = [];
      lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
    }
  }
}




  