let wins = 0;
let current = word;
let text = guess;
let remaining = remLetters;
let used = document.onkeyup = function(event) {
    let userGuess = event.key;
}


let options = ["horse", "rope", "saddle", "saloon", "train", "cowboy", "wagon", "tuberculosis", "cactus", "pistol", "steeple", "sule", "spurs", "boots", "chaps"];

//for selecting random word
let word = options[Math.floor(Math.random() * options.length)];

//using underscore to show each letter of answer
let answers = [];
for (let i = 0; i < word.length; i++){
    answers[i] = "_";
}
// document.onkeyup = function (event){
//    let userGuess = event.key;

// }

let remLetters = word.length;

////////////////////

while (remLetters > 0 ){

    alert(answers.join(" "));

    let guess = prompt("Click any letter to start!")

    if(guess === null){

        break; //ends game


    }else if(guess.length !== 1) {

        alert("Choose only one letter, please!");

    }else{

        for ( let j = 0; j < word.length; j++){

            if (word[j] === guess) {

                answer[j] = guess;

                remLetters--;
            }
        }
    }
}

alert(answers.join(" "));

alert("Good job! You picked out " + word + " !")
