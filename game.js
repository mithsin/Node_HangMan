var inquirer = require("inquirer");
var imatch = require("./letter.js");


var lives = 3;
var guessArray=[];

function reset(){
hideWord();
lives = 3;
guessArray=[];
};

var play = function(){

    if(lives > 0 ){
        inquirer.prompt([
            {
                name: "guess",
                message: "what is your guess?"
            }
        ]).then(function(userGuess){
            imatch(userGuess.guess);
            guessArray.push(userGuess.guess);
            console.log(guessArray);
            play();
        });
    };//if statement
};//play function

play();