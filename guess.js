
var setting = new Array();
var settingtem = new Array();
var goal = null;
var num = null;
var scoreboard = 1;      //score to step down every click
var real_score = 0;
var choice = null;

start();

function start(){
	$('#display0').html("Select Level");
	$(".guess_button").attr("disabled","disabled");
	$("#start_button").attr("disabled","disabled");
	//$('#start_button').disabled();
}
function before_ready(){
	
	$(".guess_button").attr("disabled","disabled");
	$('.guesses').html("");
	$('.displays').html("");
}

function ready_to_start() {
	scoreboard = 1;
	real_score = 100;
	$(".righter").children().css("background-color","#FF7733");
	//setting = game_sets.set2;
	goal = setting[random(10)-1];
	$("#display0").html("Look for "+goal);

	$('.guesses').html("");
	$('#displays').html("");

	$(".guess_button").removeAttr("disabled");
	//$(".guess_button").attr("disabled","none");
}

function random(max){
	return Math.floor((Math.random()*max)+1)
}

function next_score(){

          $(".righter div:nth-child("+scoreboard+")").css("background-color","red");
 
}

$(".guess_button").click(function(){

	scoreboard++;

	num = $(this).html();

	choice = eval(num) +1 ;

	//$('#show_guess div:nth-child('+choice+')').html(setting[num]);

	if(setting[num]== goal){

		$('#display2').html("You picked up " + setting[num] + ",  right!!");
		$('#display3').html("You score " + real_score);


		//for(num = 0;num<10;num++){
		//	$('#display1').html(setting[num] + ", ");
		//}
		

		start();
		//before_ready();
		//ready_to_start();
	}
	else{
		$('#display2').html("You picked up " + setting[num] +  ",  wrong!!");
		real_score = real_score - 10;
		next_score();
	}
});

$('#start_button').click(function(){
	ready_to_start();
});


$('.level').click(function(){
	$('#start_button').removeAttr('disabled');  //start_button enabled
	before_ready();
});

$('#levelh').click(function(){
	start();
});

$('#one').click(function(){
	var mul = random(10);
	for(temp = 0;temp<20; temp++){
		setting[temp]=(temp+1)*mul;
	}
	$('#display0').html("Level 1");
});

$('#two').click(function(){
	var mul = random(30);
	var adding = random(20);

	for(temp = 0;temp<20; temp++){
		setting[temp]=(temp+1)*mul + adding;
	}
	$('#display0').html("Level 2");
	
});

$('#three').click(function(){
	var one = random(20);
	var two = random(20);
	temp2 = 0;

	var sel = random(2);

	if(sel == 1){
		for(temp = 0;temp<20; temp++){
			setting[temp]=((temp+1)-one)*two;
		}
	}

	else{
		for(temp = 0;temp<20; temp++){
			settingtem[temp]=((temp+1)-one)*two;
		}

		// reverse the sequence of the numbers
		for(temp = 9;temp>=0; temp--){
			setting[temp2]=settingtem[temp];
			temp2++;
		}

	}

	$('#display0').html("Level 3");
	//before_ready();
});

$('#four').click(function(){
	var one = random(20);
	var two = random(20);
	temp2 = 0;

	var sel = random(2);

	if(sel == 1){
		for(temp = 0;temp<20; temp++){
			setting[temp]=((temp+1)-one)*((temp+1)-two);
		}
	}

	else{
		for(temp = 0;temp<20; temp++){
			settingtem[temp]=((temp+1)-one)*((temp+1)-two);
		}

		// reverse the sequence of the numbers
		for(temp = 9;temp>=0; temp--){
			setting[temp2]=settingtem[temp];
			temp2++;
		}

	}

	$('#display0').html("Level 4");
	//before_ready();
});

$('#five').click(function(){
	var one = random(20);
	var two = random(20);
	var three = random(20);
	temp2 = 0;

	var sel = random(2);


	if(sel == 1){
		for(temp = 0;temp<20; temp++){
			setting[temp]=((temp+1)-one)*((temp+1)-two)*((temp+1)-three);
		}
	}

	else{
		for(temp = 0;temp<20; temp++){
			settingtem[temp]=((temp+1)-one)*((temp+1)-two)*((temp+1)-three);
		}

		// reverse the sequence of the numbers
		for(temp = 9;temp>=0; temp--){
			setting[temp2]=settingtem[temp];
			temp2++;
		}

	}

	$('#display0').html("Level 5");
	//before_ready();
});

/**********************************
<script language="javascript" type="text/javascript">
 function playSound(soundfile) {
 document.getElementById("dummy").innerHTML=
 "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
 }
 </script>
 *******************************/