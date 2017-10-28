var inquirer = require("inquirer");
var arrayWord = ["cabinet", "pet", "cat", "TouchBeauty", "furniture", "toy"];
var ranWord = arrayWord[Math.floor(Math.random()* arrayWord.length)];
var hideWord = [];
	for (var i = 0; i<ranWord.length; i++){
        	hideWord.push("_");
    		};
var lives = 3;
var guessArray=[];

function reset(){
hideWord();
lives = 3;
guessArray=[];
};

function match(guessa){
console.log("--------------------------");
    for (var i = 0 ; i < ranWord.length; i++){
        if(ranWord[i] === guessa){
            hideWord[i] = guessa;
        } else {
        ilives();
        }
    } console.log(hideWord);
};

function ilives(guessa){
    for (var i=0 ; i <ranWord.length; i++){
        if(ranWord[i] !== guessa){
            lives--;
        }
    }console.log(lives)
}

var play = function(){

    if(lives > 0 ){
        inquirer.prompt([
            {
                name: "guess",
                message: "what is your guess?"
            }
        ]).then(function(userGuess){
            match(userGuess.guess);
            guessArray.push(userGuess.guess);
            console.log(guessArray);
            play();
        });
    };//if statement
};//play function

play();