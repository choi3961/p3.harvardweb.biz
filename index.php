<!DOCTYPE html>
<!--
This is the simple web application game in which you find the number 
which matches with one suggested in the head board.
-->
<html>
<head>
	<title>Guess Soon!!</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<link rel="stylesheet" type="text/css" href="main.css">
	<script src = 'jquery.js'></script>
	<script src = 'jquery.js'></script>
	<script src = 'guess.js'></script>
</head>

<body>
	<!--
	All the content in the page are included in this part.
	It contains head part, left part, center part, right part and bottom part.
	-->
	<div class = 'container'>

		<!--
		This is head part of the page. It presents the name of the game.
		-->
		<div class = 'header'>
			Guess Soon!!
		</div>

		<!--
		This part presents the interface of selecting the level of the game.
		-->
		<div class = 'lefter'>
			<button class = 'level' id = 'levelh'>Level</button>
			<button class = 'level'  id = 'five'>5</button>
			<button class = 'level'  id = 'four'>4</button>
			<button class = 'level'  id = 'three'>3</button>
			<button class = 'level'  id = 'two'>2</button>
			<button class = 'level'  id = 'one'>1</button>
		</div>

		<!--
		This is the place where the player plays game.
		This part shows the situation of the game. It presents what to do.
		It also presents the result of the game.
		-->
		<div class = 'center'>
			<div id = 'game'>
				<div id = 'display0'></div>
				<div id = 'button-container'> 
					<button class = 'guess_button'>1</button>
					<button class = 'guess_button'>2</button>
					<button class = 'guess_button'>3</button>
					<button class = 'guess_button'>4</button>
					<button class = 'guess_button'>5</button>
					<button class = 'guess_button'>6</button>
					<button class = 'guess_button'>7</button>
					<button class = 'guess_button'>8</button>
					<button class = 'guess_button'>9</button>
					<button class = 'guess_button'>10</button>
					<button class = 'guess_button'>11</button>
					<button class = 'guess_button'>12</button>
					<button class = 'guess_button'>13</button>
					<button class = 'guess_button'>14</button>
					<button class = 'guess_button'>15</button>
					<button class = 'guess_button'>16</button>
					<button class = 'guess_button'>17</button>
					<button class = 'guess_button'>18</button>
					<button class = 'guess_button'>19</button>
					<button class = 'guess_button'>20</button>
					<button class = 'guess_button'>21</button>
					<button class = 'guess_button'>22</button>
					<button class = 'guess_button'>23</button>
					<button class = 'guess_button'>24</button>
					<button class = 'guess_button'>25</button>
					<button class = 'guess_button'>26</button>
					<button class = 'guess_button'>27</button>
					<button class = 'guess_button'>28</button>
					<button class = 'guess_button'>29</button>
					<button class = 'guess_button'>30</button>
				</div>

				<div id = 'monitor'>
					<div class = 'displays' id = 'display1'></div>
					<div class = 'displays' id = 'display2'></div>
					<div class = 'displays' id = 'display3'></div>
				</div>
					
				<button id = 'start_button'>Start Over</button>

			</div>
		</div>

		<!--
		This part shows the score decreasing along with the matching failed.
		-->
		<div class = 'righter'>
			<div id = 'score-head'>SCORE</div>
			<div class = 'score' id = '100'>100</div>
			<div class = 'score' id = '90'>90</div>
			<div class = 'score' id = '80'>80</div>
			<div class = 'score' id = '70'>70</div>
			<div class = 'score' id = '60'>60</div>
			<div class = 'score' id = '50'>50</div>
			<div class = 'score' id = '40'>40</div>
			<div class = 'score' id = '30'>30</div>
			<div class = 'score' id = '20'>20</div>
			<div class = 'score' id = '10'>10</div>
			<div class = 'score' id = '0'>0</div>
		</div>

		<!--
		This bottom part of the web page explains of the game and how to play.
		-->
		<div class = 'footer'>
			<div class = 'subfooter'>
				<span>About the game :</span> 
				This is the game in which you find the number in the sequence
				 that has a pattern. Level 1, 2, and 3 have a pattern 
				 of linear function in math. Level 4 has of quadratic function. 
				 And level 5 has of cubic function.
			</div>

			<div class = 'subfooter'>
				<span>How to play :</span> First, select the level of the game 
				in the left board. Secondly, click the 'Start Over' button, 
				and then you click the number in the center board to match 
				with the number in the header.
			</div>
		</div>
	</div>

	<!-- 
	This is the core part of the game which controls the game dynamically
	along with the user event.
	-->
	<script src = 'guess.js'></script>

</body>
</html>