
var targetNum = "";
var pinkValue="";
var blueValue="";
var yellowValue="";
var purpleValue="";
var userScore = 0;
var wins = 0;
var losses = 0;


$(document).ready(function(){


// Functions to randomize crystal value and target number
 $(".btn-success").on("click", function() {

        var pinkValue = Math.floor(Math.random() * 11) + 1;
        	console.log("pink " + pinkValue);;

        var blueValue = Math.floor(Math.random() * 11) + 1;
        	console.log("blue " + blueValue);

        var yellowValue = Math.floor(Math.random() * 11) + 1;
        	console.log("yellow " + yellowValue);

        var purpleValue = Math.floor(Math.random() * 11) + 1;
        	console.log("purple " + purpleValue);

        var targetNum = Math.floor(Math.random() * 101) + 19;
        	$("#targetScore").text(targetNum);
        	console.log("target score" + targetNum);

        // updating the wins
    	var updatewins = function(){
			document.querySelector("#wins").innerHTML = "Wins: " + wins;
		};

		// updating the losses
		var updatelosses = function(){
			document.querySelector("#losses").innerHTML = "Losses: " + losses;
		};

		var reset = function (){
			targetNum = Math.floor(Math.random() * 101) + 19;;
			pinkValue= Math.floor(Math.random() * 11) + 1;;
			blueValue= Math.floor(Math.random() * 11) + 1;;
			yellowValue= Math.floor(Math.random() * 11) + 1;;
			purpleValue= Math.floor(Math.random() * 11) + 1;;
			userScore = 0;
			$("#userScore").text(userScore);
			// console.log(reset);
	
		};
		


 // Functions to increase score/ wins/ losses when the crystal is selected
	$("#pink").on("click", function(){
		$("#userScore").text(userScore += pinkValue);
		console.log("target number" + targetNum);
		console.log("userScore" , typeof userScore);
		console.log(userScore > targetNum);
		if (userScore === targetNum){
			wins++;
			updatewins();
			alert ("You won! Press the Start Button for a new Game!");
			reset();
			console.log(reset());
			
			
		} else if  (userScore > targetNum) {
			losses++;
			updatelosses();
			alert ("You Lost! Press the Start Button for a new Game!");
			reset();
		}	
	});

	$("#blue").on("click", function(){
		$("#userScore").text(userScore += blueValue);
		if (userScore === targetNum){
			wins++;
			updatewins();
			alert ("You won! Press the Start Button for a new Game!");
			reset();
			
			
		} else if (userScore > targetNum) {
			losses++;
			updatelosses();
			alert ("You Lost! Press the Start Button for a new Game!");
			reset();
		}
	});

	$("#yellow").on("click", function(){
		$("#userScore").text(userScore += yellowValue);
		if (userScore === targetNum){
			wins++;
			updatewins();
			alert ("You won! Press the Start Button for a new Game!");
			reset();
			
		} else if (userScore >= targetNum) {
			losses++;
			updatelosses();
			alert ("You Lost! Press the Start Button for a new Game!");
			reset();
		}
	});

	$("#purple").on("click", function(){
		$("#userScore").text(userScore += purpleValue);
		if (userScore === targetNum){
			wins++;
			updatewins();
			alert ("You won! Press the Start Button for a new Game!");
			reset();
			
		} else if (userScore >= targetNum) {
			losses++;
			updatelosses();
			alert ("You Lost! Press the Start Button for a new Game!");
			reset();
		}
	});



 
    });


});



