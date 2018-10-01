// references to DOM elements
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');
var $guessesLeft = document.getElementById('guesses-left');
var $guessedLetters = document.getElementById('guessed-letters');

// Create variables for game (letterBank, wins, losses, pickedWord, 
//                             guessesLeft, guessedLetterBank)
var letterBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var pickedLetter = "";
var userGuess = "";
var guessedLetterBank = [];

pickedLetter = letterBank[Math.floor(Math.random() * letterBank.length)];

// letterGuess function, takes in the letter the user presses and sees if it's the picked letter by the machine.
function letterGuess(letter){
    console.log(pickedLetter);
    if(guessedLetterBank.indexOf(letter) === -1){
        guessedLetterBank.push(letter);

        // check
        if(pickedLetter === letter.toLowerCase()){
            wins++;
            $wins.textContent = wins;
            reset();
        }
        else {
            checkIncorrect(letter);
        }
    } else {
        alert('you already guessed that letter, try a new one');
    }
        
}

// checkIncorrect function 
function checkIncorrect(letter) {
    // Decrement guesses
    guessesLeft--;
    // write to DOM 
    $guessesLeft.textContent = guessesLeft;
    $guessedLetters.textContent = guessedLetterBank.join(',');

    checkLoss();
}

function checkLoss(){
    if(guessesLeft === 0){
        losses++;
        $losses.textContent = losses;
        reset();
    }
}

function reset() {
    guessesLeft = 9
    guessedLetterBank = [];
    $guessesLeft.textContent = 9;
    $guessedLetters.textContent = "";
    pickedLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
}

// Detect key down
document.onkeyup = function(event) {

    // check if it's a letter
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
    else{
        alert("that's not a letter!");
    }
}
