let options = ["horse", "rope", "saddle", "saloon", "train", "cowboy", "wagon", "tuberculosis", "cactus", "pistol", "steeple", "spurs", "boots", "chaps"];

let maxAttempts = 5;       // max lives

let lettersGuessed = [];  //letters guessed by player

let currentWord;  //current word from array

let guessingWord = []; //word the player is trying to match

let remainingGuesses = 0;  //lives left

let starting = false;  // game status, active or not

let finished = false; // command for "press any key to start!"

let wins = 0;  // total wins


// ****************** game set up ***********************

function reset (){

    remainingGuesses = maxAttempts;

    starting = false;
    
    currentWord = options[Math.floor(Math.random() * options.length)]; //for selecting random word

    lettersGuessed = []; 

    guessingWord = [];

    // document.getElementById("hangman").src = "assets0/images/hangman.png";
    
    for(i = 0; i < options[currentWord].length; i++);{// I'm nesting the currentWordsIndex 
    guessingWord.push("_");     // variable within the main array.  I needed a way to clear the array                      //and save the word being guessed while that current word being disguised by "_".
}
    document.getElementById("hangman").style.cssText="display:none";
   
    document.getElementsByClassName("try-again").style.cssText= "display: none"; //display:none works...

    document.getElementsByClassName("game-over").style.cssText = "display: none"; //as a css attr...
    
    document.getElementsByClassName("congrats").style.cssText = "display: none"; //JS is longer...

    updateDisplay();
};

function updateDisplay() {

    document.getElementById("wins").innerText = wins;

    document.getElementById("current").innerText = "";

    for (var i = 0; i < guessingWord.length; i++){

        document.getElementById("current").innerText += guessingWord[i];
    }
    document.getElementById("remaining").innerText = remainingGuesses;

    document.getElementById("used").innerText = lettersGuessed;

    if(remainingGuesses <= 0) {
        document.getElementsByClassName("game-over").style.cssText = "display:block";

        document.getElementsByClassName("try-again").style.cssText = "display:block";

        hasFinished = true;
    }
}
// document.onkeyup = function (event){    // * document.onkeyup is picking up individual keystrokes, funtion is picking up the events of the event.key *Event.key was named as a guess variable * The query selector is filling in the event.key variable in the text id class of the html

    // console.log(event.key);
    // let guess = event.key; 
    // document.querySelector("#text").innerHTML = guess; // the query selector cannot work in the innherHTML if the even.key is not set up in sequential order.
// }

// let session = options[Math.floor(Math.random() * options.length)]; //for selecting random word

//using underscore to show each letter of answer and trying to use this section to log in answers section
// let answers = document.getElementById("current");
// for (let i = 0; i < session.length; i++){
//     let answersChoice = document.createElement("p");

//     answersChoice.textContent = options[i]
    // document.querySelector("current").innerHTML = [answers[i]]; // <----I want this to display the                                                          correct letters you're selecting of the answer
// }
// Trying to use this to get game started
// let remLetters = session.length;
//     if (remLetters > 0 ){
//     document.querySelector("start").innerHTML = "Click any letter to start!";
//     document.onkeyup = function (event){
//         (answers.join(" "));

//     }
// }    

