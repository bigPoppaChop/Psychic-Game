// ==================
// 
// alphabet array to compare guess against
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Game data
var chances = 10;
var wins = 0;
var losses = 0;
console.log("Guesses Left: " + chances);
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("I am thinking of the letter " + "`" + computerGuess + "` and you're a cheater");

document.onkeyup = function(event){
  var guess =  event.key.toLocaleLowerCase();  
  console.log("User Guess: " + guess);
  var letterCheck = alphabet.indexOf(guess)
  // Checking the key pressed exists in the alphabet array
 
  // Win Condition
  if (guess === computerGuess){
    console.log(true);
    wins++;
    console.log("Wins: " + wins);
  }
  // Check key pressed is a letter
  else if (letterCheck === -1){
    console.log("Only guess letters please.")

  }
  //
  else{
    chances = chances - 1;
    console.log("Incorrect. Remaining chances: " + chances);
    if (chances === 0){
      alert("YOU LOSE");
      losses++;
      console.log("Losses: " + losses);
    }
  }
}




  