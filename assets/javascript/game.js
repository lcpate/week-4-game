
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
        	$("#pink").text(pinkValue);
        	console.log(pinkValue);;

        var blueValue = Math.floor(Math.random() * 11) + 1;
        	$("#blue").text(blueValue);
        	console.log(blueValue);

        var yellowValue = Math.floor(Math.random() * 11) + 1;
        	$("#yellow").text(yellowValue);
        	console.log(yellowValue);

        var purpleValue = Math.floor(Math.random() * 11) + 1;
        	$("#purple").text(purpleValue);
        	console.log(purpleValue);

        var targetNum = Math.floor(Math.random() * 101) + 19;
        	$("#targetScore").text(targetNum);
        	console.log("target score" + targetNum);




 // Functions to increase score/ wins/ losses when the crystal is selected
	$("#pink").on("click", function(){
		$("#userScore").text(score += pinkValue);
		if (score === targetNum){
			alert("You Win!");
		} else if (score >= targetNum) 
			alert("You Lose!");
			losses++;
		console.log("score" + score);

	});

	$("#blue").on("click", function(){
		$("#userScore").text(score += blueValue);
		if (score === targetNum){
			alert("You Win!");
		} else if (score >= targetNum)
			alert("You Lose!");
			losses++;
		console.log(score);
	});

	$("#yellow").on("click", function(){
		$("#userScore").text(score += yellowValue);
		if (score === targetNum){
			alert("You Win!");
		} else if (score >= targetNum)
			alert("You Lose!");
			losses++;
		console.log(score);
	});

	$("#purple").on("click", function(){
		$("#userScore").text(score += purpleValue);
		if (score === targetNum){
			alert("You Win!");
		} else if (score >= targetNum)
			alert("You Lose!");
			losses++;
		console.log(score);
	});



 
    });


});

