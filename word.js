//Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data var arrayWord = ["cabinet", "pet", "cat", "TouchBeauty", "furniture", "toy"];
var arrayWord = ["cabinet", "pet", "cat", "TouchBeauty", "furniture", "toy"];
var ranWord = arrayWord[Math.floor(Math.random()* arrayWord.length)];

function iword(rword){
this.rword = rword;
this.hideWord = [];
	for (var i = 0; i<this.rword.length; i++){
        	this.hideWord.push("_");
    		};
};

var myword = new iword(ranWord);

module.exports = iword;