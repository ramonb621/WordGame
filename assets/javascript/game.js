let userGuess = document.getElementsByClassName("text").innerHTML = [];

let options = ["horse", "rope", "saddle", "saloon", "train", "cowboy", "wagon", "tuberculosis", "cactus", "pistol", "steeple", "sule", "spurs", "boots", "chaps"];

let session = options[Math.floor(Math.random() * options.length)]; //for selecting random word

//using underscore to show each letter of answer
let answers = [];
for (let i = 0; i < session.length; i++){
    answers[i] = "_";
    document.getElementsByClassName("current").innerHTML = answers;
}

// let remLetters = session.length;

// while (remLetters > 0 ){
    
    // onkeyup(answers.join(" "));
    
    // document.getElementsByClassName("start").innerHTML = "Click any letter to start!";
    
    // }    
    ////////////////////
    
    // document.getElementsByClassName("start").innerHTML = "Click any letter to start!";
    
    // let guess = prompt
    // if(guess === null){
        
        //     break; //ends game
        
        
        //     // }else if(guess.length !== 1) {
            
            //     //     alert("Choose only one letter, please!");
            
            //     }else{
                
                //         for ( let j = 0; j < word.length; j++){
                    
                    //             if (word[j] === guess) {
                        
                        //                 answer[j] = guess;
                        
                        //                 remLetters--;
                        
                        
                        //                 let wins = remLetters;
                        //                 if (remLetters === 0);{
                            
                            //                 document.getElementsByClassName("wins").innerHTML = "Wins:" + wins;
                            
                            //                 }
                            //             }
                            //         }
                            //     }
                            // }
                            
                            // alert(answers.join(" "));
                            
                            // alert("Good job! You picked out " + word + " !")
                            
                            // let alphaUsed = document.onkeyup = function(event) {
                            //     userGuess = event.key;
                            // }