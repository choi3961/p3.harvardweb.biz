<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="main.css">
	<script src = 'jquery.js'></script>
	<script src = 'jquery.js'></script>
	<script src = 'guess.js'></script>

</head>
<body>
	<div class = 'container'>
		<div class = 'header'>
			Guess Soon!!
		</div>
		<div class = 'lefter'>
			<button class = 'level' id = ''>Level</button>
			<button class = 'level'  id = 'five'>5</button>
			<button class = 'level'  id = 'four'>4</button>
			<button class = 'level'  id = 'three'>3</button>
			<button class = 'level'  id = 'two'>2</button>
			<button class = 'level'  id = 'one'>1</button>
		</div>

		<div class = 'center'>
			<div id = 'game'>
				<div id = 'display0'></div>
				<div id = 'playbuttons'> 
					<button class = 'guess_button'>0</button>
					<button class = 'guess_button'>1</button>
					<button class = 'guess_button'>2</button>
					<button class = 'guess_button'>3</button>
					<button class = 'guess_button'>4</button>
					<button class = 'guess_button'>5</button>
					<button class = 'guess_button'>6</button>
					<button class = 'guess_button'>7</button>
					<button class = 'guess_button'>8</button>
					<button class = 'guess_button'>9</button>
				</div>
				<div id = 'show_guess'>
					<div class = 'guesses' id = 'guess0'></div>
					<div class = 'guesses' id = 'guess1'></div>
					<div class = 'guesses' id = 'guess2'></div>
					
				</div>

				<div id = 'monitor'>
					<div id = 'display'></div>
					<div id = 'display2'></div>
					<div id = 'display3'></div>
				</div>
					

				<button id = 'start_button'>Start Over</button>

			</div>
		</div>
		
		<div class = 'righter'>
			<div id = 'score'>score</div>
			<div id = '100'>100</div>
			<div id = '90'>90</div>
			<div id = '80'>80</div>
			<div id = '70'>70</div>
			<div id = '60'>60</div>
			<div id = '50'>50</div>
			<div id = '40'>40</div>
			<div id = '30'>30</div>
			<div id = '20'>20</div>
			<div id = '10'>10</div>
			<div id = '0'>0</div>
			

		</div>

		<div class = 'footer'>
		</div>

		<div>
		</div>
	</div>

	<script src = 'guess.js'></script>

</body>
</html>