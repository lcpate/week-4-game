
var targetNum = "";
var pinkValue="";
var blueValue="";
var yellowValue="";
var purpleValue="";
var score = 0;
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
	var targetNum = "";
	var pinkValue="";
	var blueValue="";
	var yellowValue="";
	var purpleValue="";
	var score = 0;
	console.log(reset);
};

 // Functions to increase score/ wins/ losses when the crystal is selected
	$("#pink").on("click", function(){
		$("#userScore").text(score += pinkValue);
		if (score === targetNum){
			wins++;
			updatewins();
			reset();
			
		} if (score > targetNum) 
			losses++;
			updatelosses();
			reset();
	});

	$("#blue").on("click", function(){
		$("#userScore").text(score += blueValue);
		if (score === targetNum){
			wins++;
			updatewins();
			reset();
			
		} if (score > targetNum) 
			losses++;
			updatelosses();
			reset();
	});

	$("#yellow").on("click", function(){
		$("#userScore").text(score += yellowValue);
		if (score === targetNum){
			wins++;
			updatewins();
			reset();
			
		} if (score > targetNum) 
			losses++;
			updatelosses();
			reset();
	});

	$("#purple").on("click", function(){
		$("#userScore").text(score += purpleValue);
		if (score === targetNum){
			wins++;
			updatewins();
			reset();
			
		} if (score > targetNum) 
			losses++;
			updatelosses();
			reset();
	});



 
    });


});

