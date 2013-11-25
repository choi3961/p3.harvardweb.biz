var game_sets = new Object();
//document.write("hello555");


game_sets = {"set1":[1,3,5,7,9,11,13],
			"set2":[11,13,15,17,19,21,23,25,27,29],
			"set3":[1,3,5,7,9,11,13],
			"set4":[1,3,5,7,9,11,13],
			"set5":[1,3,5,7,9,11,13],
			"set6":[1,3,5,7,9,11,13],
			"set7":[1,3,5,7,9,11,13],
			"set8":[1,3,5,7,9,11,13],
			"set9":[1,3,5,7,9,11,13],
			"set10":[1,3,5,7,9,11,13]
			};

var setting = new Array();
var goal = null;
var num = null;
var score = 1;      //score to step down every click
ready_to_start();

function ready_to_start() {
	setting = game_sets.set2;
	goal = setting[random(10)-1];
	$("#display0").html("Look for "+goal);
}

function random(max){
	return Math.floor((Math.random()*max)+1)
}

function next_score(){
	
	if(score == 1){
		$('.righter div:nth-child(1)').css("font-size","30px");
	}
	if(score == 2){
		$('.righter div:nth-child(2)').css("font-size","30px");
	}
	if(score == 3){
		$('.righter div:nth-child(3)').css("font-size","30px");
	}
	if(score ==4 ){
		$('.righter div:nth-child(4)').css("font-size","30px");
	}
	if(score ==5 ){
		$('.righter div:nth-child(5)').css("font-size","30px");
	}
	if(score ==6 ){
		$('.righter div:nth-child(6)').css("font-size","30px");
	}
	if(score ==7 ){
		$('.righter div:nth-child(7)').css("font-size","30px");
	}
	if(score ==8 ){
		$('.righter div:nth-child(8)').css("font-size","30px");
	}
	if(score ==9 ){
		$('.righter div:nth-child(9)').css("font-size","30px");
	}
	if(score == 10){
		$('.righter div:nth-child(10)').css("font-size","30px");
	}
	
}

$("button").click(function(){

	score++;

	num = $(this).html();

	if(setting[num]== goal){
		$('#display2').html("You are right");
	}
	else{
		$('#display2').html("You are wrong");
	}

	//$('#50').css("color","blue");
/////////////
	//$('.righter div:nth-child(2)').css("font-size","30px");

	//var temp = $('.righter div:nth-child(2)').html();
	//$('#display3').html(temp);
	//console.log("hello555");
	//console.log(temp);
///////////////
	next_score();
	$('#display3').html(score);
	console.log(score);
	
});

$('#start_button').click(function(){
	ready_to_start();

});
