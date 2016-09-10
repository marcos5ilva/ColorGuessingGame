

var playerInputText;
var playerInput;
var playerGuesses = 0;
var playerInputText;
var finished = false;
var maxColorNumber;
var colors = ['blue','cyan','gold','green','magenta','orange','red', 'white'];
var targetColor;
var gameSound="GameSound.mp3";


function doGame(){
	

		//Ramdomly picking a color from the color array
		maxColorNumber = colors.length ; //Check the number of colors on the array and save it
		var randomNumber = Math.random() * maxColorNumber; //Multiply a random number for the color array lenght
		var randomNumberInt= Math.floor(randomNumber);
		targetColor = colors[randomNumberInt];

		alert('The Target Color is: '+ targetColor);

		while(!finished){
			//Asking for player input
			playerInputText = prompt("I am thinking  of one these colors: \n"+
							colors+
							" \n What color am I thinking of?");
		
			

			if(playerInputText == targetColor){
					document.body.style.backgroundColor = targetColor;

					alert("You got it! The color was: \n\n"+
					targetColor+
					"\n\n It took you "+playerGuesses+
					" guesses to get the color");

					finished = true;
			}

			playerGuesses+=1;

			console.log(colors);
			console.log('Targuet Color is: '+targetColor);
			console.log('Player Guess is:' + playerInputText)
			console.log(randomNumberInt);
			console.log(finished);
		}

}

