
  var computerRandom = "";
  var counter = 0;
  var numbers = [10, 1, 7, 5];
  var numberToGuess = 53;

  //computer picks and displays a random number between 19 - 120
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandomInt(19, 120));

  //4 buttons are displayed on the screen


$(document).ready(function() {
  //4 buttons each have a random hidden value between 1 - 12
  var image1 = $("<img>");
  image1.attr("src", "assets/images/lego-blue.png");
  image1.attr("click-num", numbers[0]);
  image1.addClass("clickImage");
  $('#image1').append(image1);

  // var image1 = $("<img>");
  // image1.attr("src", "assets/images/lego-blue.png");
  // image1.attr("click-num", numbers[0]);
  // image1.addClass("clickImage");
  // $('#image1').append(image1);


  $('.clickImage').on('click', function(){
        counter = counter + parseInt($(this).data('num'));

        $('#yourNumber').text(counter);

        if (counter == numberToGuess){
          alert('You won!!!!');
        }else if( counter > numberToGuess){
          alert('You lost!');
        }
console.log(image1);
  });
});

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




