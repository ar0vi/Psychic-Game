
//random letter generator//

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var psychicLetter = letters[Math.floor(Math.random() * letters.length)];

//player 1 stats //
var wins = 0;
var losses = 0;
var totalGuesses = 7;


document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guess != psychicLetter){
        alert("Your inner eye is...clouded");
        document.getElementById("guessLeft").innerHTML= (totalGuesses-- -1);
        var guessLog = document.getElementById("guessLog").innerHTML += guess;
        }


    if (guess == psychicLetter) {
        wins++;
        alert("Amazing! You have The Gift!");
        var guessLog = document.getElementById("guessLog").innerHTML = "    "
        totalGuesses= 7;
        psychicLetter = letters[Math.floor(Math.random() * letters.length)];
        guessLog.length = 0;
        
        } 

    if (totalGuesses == 0){
        alert("You most certainly do not have The Gift, Loser!");
        document.getElementById("lossTot").innerHTML= losses++ +1;
        var guessLog = document.getElementById("guessLog").innerHTML = "    "
        psychicLetter = letters[Math.floor(Math.random() * letters.length)];
        totalGuesses= 7;
        }
}
