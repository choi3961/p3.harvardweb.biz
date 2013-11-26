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
var real_score = 0;

//ready_to_start();

before_ready();
function before_ready(){
	$("#display0").html("click Start to begin");
	$(".guess_button").attr("disabled","disabled");
}

function ready_to_start() {
	score = 1;
	real_score = 100;
	$(".righter").children().css("background-color","#FF7733");
	//setting = game_sets.set2;
	goal = setting[random(10)-1];
	$("#display0").html("Look for "+goal);

	$('#display2').html("");
	$('#display3').html("");

	$(".guess_button").removeAttr("disabled");
	//$(".guess_button").attr("disabled","none");
}

function random(max){
	return Math.floor((Math.random()*max)+1)
}

function next_score(){

          $(".righter div:nth-child("+score+")").css("background-color","red");
 
}

$(".guess_button").click(function(){

	console.log("hello777");
	score++;

	num = $(this).html();

	if(setting[num]== goal){
		$('#display2').html("You are right");
		$('#display3').html("You got " + real_score);

		before_ready();
		//ready_to_start();
	}
	else{
		$('#display2').html("You are wrong");
		real_score = real_score - 10;
		next_score();
	}

});

$('#start_button').click(function(){
	ready_to_start();
});

$('#one').click(function(){
	var mul = random(5);
	for(temp = 0;temp<10; temp++){
		setting[temp]=(temp+1)*mul;
	}
	$('#display3').html("one");
	$('#display3').html(mul);
});

$('#two').click(function(){
	var mul = random(10);

	for(temp = 0;temp<10; temp++){
		setting[temp]=(temp+1)*mul;
	}
	$('#display3').html(mul);
});

$('#three').click(function(){
	var  mul = random(9);
	var adding = random(10);
	for(temp = 0;temp<10; temp++){
		setting[temp]=(temp+1)*mul + adding;
	}
	$('#display3').html(mul);
	$('#display11').html(adding);
});

