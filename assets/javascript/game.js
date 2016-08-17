
  var counter = 0;
  var numbers = [10, 1, 7, 5];

  //computer picks a random number between 19 - 120
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 var computerRandom = (getRandomInt(19, 120));
 console.log(computerRandom);
 //display comuterRandom in html
 $(".computer-number").text(computerRandom);

  //4 buttons are displayed on the screen


$(document).ready(function() {
  $(".computer-number").text(computerRandom);
  //4 buttons each have a random hidden value between 1 - 12
//   var image1 = $("<img>");
//   image1.attr("src", "assets/images/lego-blue.png");
//   image1.attr("click-num", numbers[0]);
//   image1.addClass("clickImage");
//   $("#blue-lego").append(clickImage);


//   $('.clickImage').on('click', function(){
//         counter = counter + parseInt($(this).data('num'));

//         $('#yourNumber').text(counter);


// console.log(clickImage);
  // });
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




