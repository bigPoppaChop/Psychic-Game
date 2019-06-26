// ==================
// 
// 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var chances = 10;
var wins = 0;
var losses = 0;
console.log("Guesses Left: " + chances);
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("I am thinking of the letter " + "`" + computerGuess + "` and you're a cheater");

document.onkeyup = function(event){
  var guess =  event.key.toLocaleLowerCase();  
  console.log("User Guess: " + guess);
  
  // Win Condition
  if (guess === computerGuess){
    console.log(true);
    wins++;
    console.log("Wins: " + wins);
  }
  // Checking the key pressed exists in the alphabet array
  else if (guess = "1"){
    console.log("WRONG")
  }
  //
  else{
    chances = chances - 1;
    console.log(chances);
    if (chances <= 0){
      alert("YOU LOSE");
      losses++;
      console.log("Losses: " + losses);
    }
  }
}




  