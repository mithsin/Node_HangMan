//Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var iword = require("./word.js");

function imatch(guessa){
console.log("--------------------------");
    for (var i = 0 ; i < iword.ranWord.length; i++){
        if(iword.ranWord[i] === this.guessa){
            iword.hideWord[i] = this.guessa;
        } else {
        lives--;
        }
    }; console.log(iword.ranWord);
};

console.log(iword.randWord);

module.exports = imatch;