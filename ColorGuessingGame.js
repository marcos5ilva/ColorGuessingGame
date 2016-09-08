

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

		while(!finished){
			//Asking for player input
			playerInputText = prompt("I am thinking  of one these colors: \n"+
							colors+
							" \n What color am I thinking of?");
		
			playerGuesses+=1;
			finished = checkGuess();

			console.log(colors);
			console.log('Targuet Color is: '+targetColor);
			console.log('Player Guess is:' + playerInputText)
			console.log(randomNumberInt);
			console.log(finished);
		}

}

function checkGuess(){
	console.log("checkGuess working")

	//Return wrong answear
	if(playerInputText!==targetColor){

		//Check if the playerInputText is valid
		var validColor = false;

		for(i=0;i<=maxColorNumber-1;i++){
		
			if(playerInputText === colors[i]){
				validColor = true;

			}
		}

		//playerInputText is valid
		if(validColor){

				//Determine if player guess is alphabetical higher than target color
				if(playerInputText > targetColor){
					alert("Your color is Higher. Try again!");
					return false;
				}

			//Determine if player guess is alphabetical lower than target color
				if(playerInputText< targetColor){
					alert("Your color is Lowe. Try again!");
					return false;
				}
		}

		//playerInputText isn't valid
		else{
			alert("The color must be on the list below: \n\n"+
				colors+
				"\n\n"+
				" Try again!");
			return false;
		}
			
	}


	//Return right answear
	if(playerInputText===targetColor){

			document.body.style.backgroundColor = targetColor;

			alert("You got it! The color was: \n\n"+
				targetColor+
				"\n\n It took you "+playerGuesses+
				" guesses to get the color");

			return true;
	}

}

