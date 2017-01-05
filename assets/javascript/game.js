
// use single quotes '' when you're referencing something already in html
// use double quotes "" when writing html in jQuery
// Each lego should have a random hidden value between 1 - 12

var counter = 0;
var userSum = 0;
var wins = 0;
var loses = 0;

// backstretch used for the background images

// computer picks a random number between min, max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// random number picked for user to guess
var computerRandom = (getRandomInt(19, 120));
console.log(computerRandom);

// assign a number to each lego
var greenLegoNumber = getRandomInt(1, 12);
    console.log(greenLegoNumber);
var blueLegoNumber = getRandomInt(1, 12);
    console.log(blueLegoNumber);
var yellowLegoNumber = getRandomInt(1, 12);
    console.log(yellowLegoNumber);
var redLegoNumber = getRandomInt(1, 12);
    console.log(redLegoNumber);

$(document).ready(function() {

	// backstretch used for the background image
	$(".jumbotron").backstretch("assets/images/lego-background-lightgray.jpg");

    // display randomly picked computer number in html
    $('.computer-number').text("Number To Match: " + computerRandom);


    // user clicks on the green lego and it returns the value
    $('#green-lego').click(function() {
        userSum = userSum + greenLegoNumber;
        console.log(userSum);
        // display the userSum
        $('#user-sum').text("Your Number: " + userSum);
        // alert if the user wins or loses
        if (userSum === computerRandom) {
            alert("You win!");
            // increment 'wins' by 1
            wins++;
        }
        else if (userSum > computerRandom) {
            alert("You lose");
            // increment 'loses' by 1
            loses++;
        }

    });
    // user clicks on the blue lego and it returns the value
    $('#blue-lego').click(function() {
        userSum = userSum + blueLegoNumber;
        console.log(userSum);
        // display the userSum
        $('#user-sum').text("Your Number: " + userSum);
        // alert if the user wins or loses
        if (userSum === computerRandom) {
            alert("You win!");
            // increment 'wins' by 1
            wins++;
        }
        else if (userSum > computerRandom) {
            alert("You lose");
            // increment 'loses' by 1
            loses++;
        }
    });
    // user clicks on the yellow lego and it returns the value
    $('#yellow-lego').click(function() {
        userSum = userSum + yellowLegoNumber;
        console.log(userSum);
        // display the userSum
        $('#user-sum').text("Your Number: " + userSum);
        // alert if the user wins or loses
        if (userSum === computerRandom) {
            alert("You win!");
            // increment 'wins' by 1
            wins++;
        }
        else if (userSum > computerRandom) {
            alert("You lose");
            // increment 'loses' by 1
            loses++;
        }
    });
    // user clicks on the red lego and it returns the value
    $('#red-lego').click(function() {
        userSum = userSum + redLegoNumber;
        console.log(userSum);
        // display the userSum
        $('#user-sum').text("Your Number: " + userSum);
        // alert if the user wins or loses
        if (userSum === computerRandom) {
            alert("You win!");
            // increment 'wins' by 1
            wins++;
        }
        else if (userSum > computerRandom) {
            alert("You lose");
            // increment 'loses' by 1
            loses++;
        }
    });
    // display the userSum
    $('#user-sum').text("Your Number: " + userSum);

    // display wins
    $('#show-wins').text("WINS: " + wins);

    // display loses
    $('#show-losses').text("LOSSES: " + loses);

  //when the game re-starts, the computer picks a new random number between 19 - 120


});
