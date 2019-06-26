let options = ["horse", "rope", "saddle", "saloon", "train", "cowboy", "wagon", "tuberculosis", "cactus", "pistol", "steeple", "spurs", "boots", "chaps"];

let maxAttempts = 5;       // max lives

let lettersGuessed = [];  //letters guessed by player

let currentWordsIndex;  //current word from array

let guessingWord = []; //word the player is trying to match

let remainingGuesses = 0;  //lives left

let starting = false;  // game start

let finished = false; // command for "press any key to start!"

let wins = 0;  // total wins


// ****************** Starting game code here ***********************

function reset (){
    remainingGuesses = maxAttempts;

    starting = false;
    
    currentWordsIndex = options[Math.floor(Math.random() * options.length)]; //for selecting random word

    lettersGuessed = [];

    guessingWord = [];

    // document.getElementById("hangman").src = "assets0/images/hangman.png";

    
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

