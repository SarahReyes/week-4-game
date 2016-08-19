
// use single quotes '' when you're referencing something already in html
// use double quotes "" when writing html in jQuery
// Each lego should have a random hidden value between 1 - 12

var counter = 0;
var userGuess = 0;

// computer picks a random number between min, max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// random number picked for user to guess
var computerRandom = "Number To Match: " + (getRandomInt(19, 120));
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
    // display randomly picked computer number in html
    $('.computer-number').text(computerRandom);


    // user clicks on the green lego and it returns the value
    $('#green-lego').click(function() {
        userGuess = userGuess + greenLegoNumber;
        console.log(userGuess);
    });
    // user clicks on the blue lego and it returns the value
    $('#blue-lego').click(function() {
        userGuess = userGuess + blueLegoNumber;
        console.log(userGuess);
    });
    // user clicks on the yellow lego and it returns the value
    $('#yellow-lego').click(function() {
        userGuess = userGuess + yellowLegoNumber;
        console.log(userGuess);
    });
    // user clicks on the red lego and it returns the value
    $('#red-lego').click(function() {
        userGuess = userGuess + redLegoNumber;
        console.log(userGuess);
    });




    // display the user click
    $('#user-sum').text();


});




    //user's sum box increments by the value of the lego, each time a lego is clicked


  //user wins if their total sum is equal to the random computer pick


  //user continues to play if their sum is < the random computer pick


  //user loses if their sum is > the random computer pick


  //the game re-starts when the user wins or loses


  //if the user wins, display win++, if the user loses, display losses++


  //when the game re-starts, the computer picks a new random number between 19 - 120
