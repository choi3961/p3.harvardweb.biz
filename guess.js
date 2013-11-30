/*
This application is for the index.php which runs a simple game nemed 'Guess Soon!!'
This is the core part of the web application which responds to the user event.
*/
var setting = new Array();		// The array to contain the numbers to be guessed.
var settingtem = new Array();	// Ths array to contain the numbers to be reversed for the array setting.
var goal = null;				// The number to be matched in the game.
var num = null;					// The numbers the array would have.
var scoreboard = 1;      		//score to step down every click
var real_score = 0;				// The score the player could get.

start();						// Initializes the game.

/*
Initializes the application. The player could select the level of the game.
Other buttons are disabled.
*/
function start(){
	$('#display0').html("Select Level");
	$(".guess_button").attr("disabled","disabled");
	$("#start_button").attr("disabled","disabled");
	$(".score").css("background-color","#F2C718");
}

/*
The player could click the 'Start Over' button to begin the game 
in this state.
*/
function before_ready(){
	$(".score").css("background-color","#F2C718");
	$(".guess_button").attr("disabled","disabled");
	$('.guesses').html("");
	$('.displays').html("");
}

/*
This is the state the player could play the game after 'Start Over' 
button clicked. By clicking the buttons of numbers the player runs 
the game.
*/
function ready_to_start() {
	scoreboard = 1;
	real_score = 100;
	$(".score").css("background-color","#F2C718");
	goal = setting[random(30)-1];					// Array to contain random numbers.
	$("#display0").html("Look for "+goal);
	$('#display2').html("");
	$(".guess_button").removeAttr("disabled");
}

/*
This is the function to produce a random number for the game.
*/
function random(max){
	return Math.floor((Math.random()*max)+1)
}

/*
This shows the score the player could get along with the clicking the guess-buttons.
*/
function next_score(){

          $(".righter div:nth-child("+scoreboard+")").css("background-color","red");
}

/*
This is the event listener which the player clicks the buttons against.
It judges if the player clicked the number which matches with the number suggested in the head part.
*/
$(".guess_button").click(function(){

	if(real_score == 0){
		start();
		$('#display2').html("You lost the game?!");
		$('#display3').html("Score 0");
	}
	else{

		scoreboard++;

		num = $(this).html();

		
		// If matched, it shows the score and returns to the start state.
		if(setting[num-1]== goal){

			$('#display2').html("You picked up " + setting[num-1] + ",  right!!");
			$('#display3').html("Score " + real_score);
			start();
		}
		
		// If not matched, the player could click another button to find the number.
		else{
			$('#display2').html("You picked up " + setting[num-1] +  ",  wrong!!");
			real_score = real_score - 10;
			next_score();
		}
	}
});

/*
It returns to the state of ready_to_start in the game.
*/
$('#start_button').click(function(){
	ready_to_start();
});

/*
This suggests the state of before_ready in the game for the player to 
click 'Start Over' button.
*/
$('.level').click(function(){
	$('#start_button').removeAttr('disabled');  //start_button enabled
	before_ready();
});

/*
Initializes the game to the state of the start.
*/
$('#levelh').click(function(){
	start();
});

/*
Determines the level of the game into level 1.
Arrays the numbers into 20.
*/
$('#one').click(function(){
	var mul = random(10);
	for(temp = 0;temp<30; temp++){
		setting[temp]=(temp)*mul;
	}
	$('#display0').html("Level 1");
});

/*
Determines the level of the game into level 2.
Arrays the numbers into 20 with wider arrange.
*/
$('#two').click(function(){
	var mul = random(30);
	var adding = random(20);

	for(temp = 0;temp<30; temp++){
		setting[temp]=(temp)*mul + adding;
	}
	$('#display0').html("Level 2");
	
});

/*
Determines the level of the game into level 3.
Arrays the numbers into 20. The order could randomly be reversed .
*/
$('#three').click(function(){
	var one = random(20);
	var two = random(20);
	temp2 = 0;

	var sel = random(2);

	// Ordinary order
	if(sel == 1){
		for(temp = 0;temp<30; temp++){
			setting[temp]=((temp)-one)*two;
		}
	}

	// reversed order
	else{
		for(temp = 0;temp<30; temp++){
			settingtem[temp]=((temp)-one)*two;
		}

		// reverse the sequence of the numbers
		for(temp = 29;temp>=0; temp--){
			setting[temp2]=settingtem[temp];
			temp2++;
		}
	}

	$('#display0').html("Level 3");
});

/*
Determines the level of the game into level 4.
Arrays the numbers into 20. The order could randomly be reversed .
*/
$('#four').click(function(){
	var one = random(20);
	var two = random(20);
	temp2 = 0;

	var sel = random(2);

	// Ordinary order
	if(sel == 1){
		for(temp = 0;temp<30; temp++){
			setting[temp]=((temp)-one)*((temp+1)-two);
		}
	}

	// reversed order
	else{
		for(temp = 0;temp<30; temp++){
			settingtem[temp]=((temp)-one)*((temp+1)-two);
		}

		// reverse the sequence of the numbers
		for(temp = 29;temp>=0; temp--){
			setting[temp2]=settingtem[temp];
			temp2++;
		}
	}

	$('#display0').html("Level 4");
});

/*
Determines the level of the game into level 5.
Arrays the numbers into 20. The order could randomly be reversed .
*/
$('#five').click(function(){
	var one = random(20);
	var two = random(20);
	var three = random(20);
	temp2 = 0;

	var sel = random(2);

	// Ordinary order
	if(sel == 1){
		for(temp = 0;temp<30; temp++){
			setting[temp]=((temp)-one)*((temp)-two)*((temp)-three);
		}
	}
	// reversed order
	else{
		for(temp = 0;temp<30; temp++){
			settingtem[temp]=((temp)-one)*((temp)-two)*((temp)-three);
		}

		// reverse the sequence of the numbers
		for(temp = 29;temp>=0; temp--){
			setting[temp2]=settingtem[temp];
			temp2++;
		}
	}

	$('#display0').html("Level 5");
	//before_ready();
});