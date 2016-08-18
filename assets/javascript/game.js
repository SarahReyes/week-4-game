//use single quotes '' when you're referencing something already in html
//use double quotes "" when writing html in jQuery
//Each crystal should have a random hidden value between 1 - 12


  var counter = 0;

  //computer picks a random number between 19 - 120
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 var computerRandom = "Number To Guess: " + (getRandomInt(19, 120));
 console.log(computerRandom);

 var greenLego = (getRandomInt(1, 12));
 console.log(greenLego);

 var blueLego = (getRandomInt(1, 12));
 console.log(blueLego);

 var yellowLego = (getRandomInt(1, 12));
 console.log(yellowLego);

 var redLego = (getRandomInt(1, 12));
 console.log(redLego);




$(document).ready(function() {
  //display randomly picked computer number in html
  $('.computer-number').text(computerRandom);
  //user clicks on a lego and their sum increments
  $('.click-images').on('click', function() {
    counter = counter + greenLego;
    $('#user-sum').text(counter);
    console.log(counter);

  });
// $('#green-lego').attr('num', getRandomInt(1, 12));

});


// counter = counter + parseInt($(this).data('num'));

  //when the user clicks a button, add the value of the button to the user's sum
  // $(document).ready(function() {
  //     $("#btnSubmit").click(function(){
  //         alert("button");
  //     });
  // });

  //user's sum box increments by the value of the button, each time a button is clicked


  //user wins if their total sum is equal to the random computer pick


  //user continues to play if their sum is < the random computer pick


  //user loses if their sum is > the random computer pick


  //the game re-starts when the user wins or loses


  //if the user wins, display win++, if the user loses, display losses++


  //when the game re-starts, the computer picks a new random number between 19 - 120




