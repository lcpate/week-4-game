
var targetNum =50;
var crystalValue="";
var score = 0;
var wins = 0;
var losses = 0;

$(document).ready(function(){

 $(".btn-success").on("click", function() {
        var crystalValue = Math.floor(Math.random() * 11) + 1;
        	$("#pink, #blue, #yellow, #purple").text(crystalValue);
        	console.log(crystalValue);


 
	$("#pink").on("click", function(){
		score += crystalValue;
		alert("New Score" + score);
		if (score === targetNum){
			alert("You Win!");
		} else if (score >= targetNum)
			alert("You Lose!");
		console.log(score);

	});

	$("#blue").on("click", function(){
		score += crystalValue;
		alert("New Score" + score);
		if (score === targetNum){
			alert("You Win!");
		} else if (score >= targetNum)
			alert("You Lose!");
		console.log(score);
	});

	$("#yellow").on("click", function(){
		score += crystalValue;
		alert("New Score" + score);
		if (score === targetNum){
			alert("You Win!");
		} else if (score >= targetNum)
			alert("You Lose!");
		console.log(score);
	});

	$("#purple").on("click", function(){
		score += crystalValue;
		alert("New Score" + score);
		if (score === targetNum){
			alert("You Win!");
		} else if (score >= targetNum)
			alert("You Lose!");
		console.log(score);
	});

	$("#targetScore").text(targetNum);

	$("#userScore").text(score);



 // When random-button is clicked...
//       $(".btn-success").on("click", function() {
//         var crystalValue = Math.floor(Math.random() * 11) + 1;
//         	$("#pink", "#blue", "#yellow", "#purple").text(crystalValue);

//       // $(".btn-success").on("click", function() {
//       //   var crystalValue = Math.floor(Math.random() * 11) + 1;
//       //   	$("#blue").text(crystalValue);
//       //   });

//       // $(".btn-success").on("click", function() {
//       //   var crystalValue = Math.floor(Math.random() * 11) + 1;
//       //   	$("#yellow").text(crystalValue);
//       //   });

//       //  $(".btn-success").on("click", function() {
//       //   var crystalValue = Math.floor(Math.random() * 11) + 1;
//       //   	$("#purple").text(crystalValue);
//       //   });
// console.log(crystalValue);
    });


});

