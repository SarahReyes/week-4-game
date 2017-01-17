
// use single quotes '' when you're referencing something already in html
// use double quotes "" when writing html in jQuery
// Each lego should have a random hidden value between 1 - 12

var userSum = 0;
var wins = 0;
var losses = 0;

// computer picks a random number between min, max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// random number picked for user to guess
var computerRandom = (getRandomInt(19, 120));
console.log(computerRandom);

// assign a random number to each lego
var greenLegoNumber = getRandomInt(1, 12);
    console.log("Green Lego: " + greenLegoNumber);
var blueLegoNumber = getRandomInt(1, 12);
    console.log("Blue Lego: " + blueLegoNumber);
var yellowLegoNumber = getRandomInt(1, 12);
    console.log("Yellow Lego: " + yellowLegoNumber);
var redLegoNumber = getRandomInt(1, 12);
    console.log("Red Lego: " + redLegoNumber);

$(document).ready(function() {

	// backstretch used for the responsive background image in the jumbotron
	$(".jumbotron").backstretch("assets/images/lego-background-lightgray.jpg");

    // display randomly picked computer number in html
    $('.computer-number').text("Number To Match: " + computerRandom);

	// display the userSum
	$('#user-sum').text("Your Number: " + userSum);

	// display wins
	$('.show-wins').text("WINS: " + wins);

	// display losses
	$('.show-losses').text("LOSSES: " + losses);



    // user clicks on the green lego and it returns the value
    $('#green-lego').click(function() {
		// if the user sum is less than the computer number the user keeps playing
		if (userSum < computerRandom) {
			userSum = userSum + greenLegoNumber;
			$('#user-sum').text("Your Number: " + userSum);
		}
		// if the user sum is equal to the computer number the user wins
		else if (userSum === computerRandom) {
			userSum = userSum + greenLegoNumber;
			// increment the wins by 1
			wins = wins + 1;
			// display the wins updated
			$('.show-wins').text("WINS: " + wins);
			// alert that the user won
			alert("You Win!");
			// pick a new random computer number
			computerRandom = (getRandomInt(19, 120));
			$('.computer-number').text("Number To Match: " + computerRandom);
			// reset the user total
			userSum = 0;
			$('#user-sum').text("Your Number: " + userSum);
		}
		// is the user sum is higher than the computer the user loses
		else {
			losses = losses + 1;
			$('.show-losses').text("LOSSES: " + losses);
			// alert the the user lost
			alert("You Lose");
			// pick a new random computer number
			computerRandom = (getRandomInt(19, 120));
			$('.computer-number').text("Number To Match: " + computerRandom);
			// reset the user total
			userSum = 0;
			$('#user-sum').text("Your Number: " + userSum);
		}
    });
    // user clicks on the blue lego and it returns the value
    $('#blue-lego').click(function() {
		// if the user sum is less than the computer number the user keeps playing
		if (userSum < computerRandom) {
			userSum = userSum + blueLegoNumber;
			$('#user-sum').text("Your Number: " + userSum);
		}
		// if the user sum is equal to the computer number the user wins
		else if (userSum === computerRandom) {
			userSum = userSum + blueLegoNumber;
			// increment the wins by 1
			wins = wins + 1;
			// display the wins updated
			$('.show-wins').text("WINS: " + wins);
			// alert that the user won
			alert("You Win!");
			// pick a new random computer number
			computerRandom = (getRandomInt(19, 120));
			$('.computer-number').text("Number To Match: " + computerRandom);
			// reset the user total
			userSum = 0;
			$('#user-sum').text("Your Number: " + userSum);
		}
		// is the user sum is higher than the computer the user loses
		else {
			losses = losses + 1;
			$('.show-losses').text("LOSSES: " + losses);
			// alert the the user lost
			alert("You Lose");
			// pick a new random computer number
			computerRandom = (getRandomInt(19, 120));
			$('.computer-number').text("Number To Match: " + computerRandom);
			// reset the user total
			userSum = 0;
			$('#user-sum').text("Your Number: " + userSum);
		}
    });
    // user clicks on the yellow lego and it returns the value
    $('#yellow-lego').click(function() {
		// if the user sum is less than the computer number the user keeps playing
		if (userSum < computerRandom) {
			userSum = userSum + yellowLegoNumber;
			$('#user-sum').text("Your Number: " + userSum);
		}
		// if the user sum is equal to the computer number the user wins
		else if (userSum === computerRandom) {
			userSum = userSum + yellowLegoNumber;
			// increment the wins by 1
			wins = wins + 1;
			// display the wins updated
			$('.show-wins').text("WINS: " + wins);
			// alert that the user won
			alert("You Win!");
			// pick a new random computer number
			computerRandom = (getRandomInt(19, 120));
			$('.computer-number').text("Number To Match: " + computerRandom);
			// reset the user total
			userSum = 0;
			$('#user-sum').text("Your Number: " + userSum);
		}
		// is the user sum is higher than the computer the user loses
		else {
			losses = losses + 1;
			$('.show-losses').text("LOSSES: " + losses);
			// alert the the user lost
			alert("You Lose");
			// pick a new random computer number
			computerRandom = (getRandomInt(19, 120));
			$('.computer-number').text("Number To Match: " + computerRandom);
			// reset the user total
			userSum = 0;
			$('#user-sum').text("Your Number: " + userSum);
		}
    });
    // user clicks on the red lego and it returns the value
    $('#red-lego').click(function() {
		// if the user sum is less than the computer number the user keeps playing
		if (userSum < computerRandom) {
			userSum = userSum + redLegoNumber;
			$('#user-sum').text("Your Number: " + userSum);
		}
		// if the user sum is equal to the computer number the user wins
		else if (userSum === computerRandom) {
			userSum = userSum + redLegoNumber;
			// increment the wins by 1
			wins = wins + 1;
			// display the wins updated
			$('.show-wins').text("WINS: " + wins);
			// alert that the user won
			alert("You Win!");
			// pick a new random computer number
			computerRandom = (getRandomInt(19, 120));
			$('.computer-number').text("Number To Match: " + computerRandom);
			// reset the user total
			userSum = 0;
			$('#user-sum').text("Your Number: " + userSum);
		}
		// is the user sum is higher than the computer the user loses
		else {
			losses = losses + 1;
			$('.show-losses').text("LOSSES: " + losses);
			// alert the the user lost
			alert("You Lose");
			// pick a new random computer number
			computerRandom = (getRandomInt(19, 120));
			$('.computer-number').text("Number To Match: " + computerRandom);
			// reset the user total
			userSum = 0;
			$('#user-sum').text("Your Number: " + userSum);
		}
    });
});
