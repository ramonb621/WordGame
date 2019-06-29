let options = ["horse", "rope", "saddle", "saloon", "train", "cowboy", "wagon", "tuberculosis", "cactus", "pistol", "steeple", "spurs", "boots", "chaps"];

let maxAttempts = 5;       // max lives

let lettersGuessed = [];  //letters guessed by player

let currentWord;  //current word from array

let chosenWord = []; //word the player is trying to match to array word

let remainingGuesses = 0;  //lives left

let starting = false;  // game status, active or not

let finished = false; // command for "press any key to start!"

let wins = 0;  // total wins


// ****************** game set up ***********************  LOOK UP QUERY SELECTORS AND SPAN TAGS!!!!
function reset (){

    remainingGuesses = maxAttempts;

    starting = false;
    
    currentWord = Math.floor(Math.random() * options.length); //for selecting random word
    
    console.log(options[currentWord]);
    
                                //^^? options[Math.floor(Math.random() * options.length)]

    lettersGuessed = []; // 6/28/19 I can't get only the correct letters used to log in the "#text". Also displaying incorrect letters.  Will also only allow 1-2 correct inputs before declaring a win.

    chosenWord = []; // 6/28/19 I can't get the entire length of word to be guessed to be displayed as " _ " until filled in by the correct letters guessed

    // document.getElementById("hangman").src = "assets0/images/hangman.png";
    
    for(var i = 0; i < options[currentWord].length; i++);{// I'm nesting the currentWordsIndex

        chosenWord.push(" _ ");     // variable within the main array I needed a way to clear the array and save the word being guessed while that current word being disguised by "_".
    
    }
    // document.getElementById("hangman");
    
    // .style.cssText="display:none";
   
    document.querySelector("try-again");
   
    // .style.cssText= "display: none"; //display:none works...

    document.getElementsByClassName("game-over");
    
    // .style.cssText= "display: none"; //as a css attr...
    
    document.getElementsByClassName("congrats");
    
    // .style.cssText= "display: none"; //JS is longer...

    updateDisplay();

}

function updateDisplay() { //tick() would be more efficient in a setting where fps can be improved
                           // so as to not need the JS to refresh with every update.
    document.getElementById("wins").innerText = wins;

    document.getElementById("current").innerText = " _ ";

    // debugger; tool for debugging

    for (var i = 0; i < chosenWord.length; i++){  //**** ONLY LETTING THE LENGTH OF GUESS UP TO 1 INSTEAD OF WHOLE WORD */
                                                    // allowing wrong guesses to count as win after 1 guess
        document.getElementById("current").innerText += chosenWord[i];
    }
    document.getElementById("remaining").innerText = remainingGuesses;

    document.getElementById("text").innerText = lettersGuessed;  // original ElemendId "used", "text" logs in appr. place

    if(remainingGuesses <= 0) {

        document.getElementsByClassName("game-over");
        
        // .style.cssText= "display:block";

        document.getElementsByClassName("try-again");
        
        // ).style.cssText= "display:block";

        finished = true;
    }
}

document.onkeydown = function(event){

    if(finished) {

        reset();

        finished = false;

    } else {

        // if (event.key.match(/[a-zA-Z]/)) {
        // }

        if (event.keyCode >= 65 && event.keyCode <= 90) {  // keyCode is only picking up alpha charac...
                                             // using the ASCII letter codes, more funct. than event.key
            makeGuess(event.key.toLowerCase());   // for the purpose of this game. 

        }

    }
}

function makeGuess(letter) {

    if(remainingGuesses > 0) {

        if(!starting) {
        
            starting = true;
        }
        
        if(lettersGuessed.indexOf(letter) === -1) {
        
            lettersGuessed.push(letter);
        
            evaluateGuess(letter);
        
        }
    }

    updateDisplay();

    checkWin();

}

function evaluateGuess(letter) {                    // I'm not sure that this is actually comparing the guessingWord from the onkeydown to the letters of the
                                                    // cleared nested array within option[currentWord].length *********
    
    let position = [];

    for(let i = 0; i < options[currentWord].length; i++) {

// console.log(options[currentWord][i] === letter, letter)
        
    if(options[currentWord][i] === letter) {

            position.push(i);

            // console.log(i)

        }

    }
    // console.warn(position)

    if(position.length <= 0) {

        remainingGuesses--;

    } else {

        for (let i = 0; i < position.length; i ++) {

            // console.info(guessingWord)
            
            chosenWord[i] = letter;

        }

    }

}

function checkWin() {

    
    if(chosenWord.indexOf("_") === -1) {
    
        document.getElementsByClassName("try-again");
        
        // .style.cssText= "display:block";
    
        wins++;
    
        finished = true;
    
    }
}

$(document).ready(function(){
    reset();            // game will not work without the update and reset activated in html file.
        
    // updateDisplay();
});
