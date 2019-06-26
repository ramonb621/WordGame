
let options = ["horse", "rope", "saddle", "saloon", "train", "cowboy", "wagon", "tuberculosis", "cactus", "pistol", "steeple", "sule", "spurs", "boots", "chaps"];
   
document.onkeyup = function (event){    // * document.onkeyup is picking up individual keystrokes, funtion is picking up the events of the event.key *Event.key was named as a guess variable * The query selector is filling in the event.key variable in the text id class of the html

    // console.log(event.key);
    let guess = event.key; 
    document.querySelector("#text").innerHTML = guess; 
}

let session = options[Math.floor(Math.random() * options.length)]; //for selecting random word

//using underscore to show each letter of answer and trying to use this section to log in answers section
let answers = [];
for (let i = 0; i < session.length; i++){
    answers[i] = "_";
    document.querySelector("current").innerHTML = [answers[i]]; // <----I want this to display the                                                          correct letters you're selecting of the answer
}
// Trying to use this to get game started
let remLetters = session.length;
    if (remLetters > 0 ){
    document.querySelector("start").innerHTML = "Click any letter to start!";
    document.onkeyup = function (event){
        (answers.join(" "));

    }
}    

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