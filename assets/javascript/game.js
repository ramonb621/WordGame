
let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


document.onkeyup = function (event){
   let userGuess = event.key;

   let computerGuess = options[Math.floor(Math.random() * options.length)];

   if (userGuess ===  options) {
    console.log("txt");
}
}
