let turn = 1;
let message = $('#message');
const field = $('.clickable');
const xTurnIcon = $('.x-turn-icon');
const oTurnIcon = $('.o-turn-icon');
let game;

// Gameplay: click field to enter your token:
field.on('click', function (event) {
  // check if the game is over
  if (game === 'gameover') {
    // block the clicking
    console.log(game);
  } else {
    if ($(this).html() === '') {
      const x = $('<p>x</p>').addClass('token');
      const o = $('<p>o</p>').addClass('token');
      // if o turn
      if (turn === 1) {
        $(this).append(x);
        turn = 0;
        xTurnIcon.addClass('hidden');
        oTurnIcon.removeClass('hidden');
        message.text('Holes, your turn!');
      } else if (turn === 0) {
        $(this).append(o);
        turn = 1;
        oTurnIcon.addClass('hidden');
        xTurnIcon.removeClass('hidden');
        message.text('Crosses, your turn!');
      }
      // "turn" decides whose turn is NEXT:
      let boxOne = $('#1').text();
      let boxTwo = $('#2').text();
      let boxThree = $('#3').text();
      let boxFour = $('#4').text();
      let boxFive = $('#5').text();
      let boxSix = $('#6').text();
      let boxSeven = $('#7').text();
      let boxEight = $('#8').text();
      let boxNine = $('#9').text();
      console.log(turn);
      console.log(boxTwo);
      console.log(boxFive);
      console.log(boxEight);
      // CHECK AGAINST WINNING COMBINATIONS FUNCTION:

      if (boxOne === boxTwo && boxOne === boxThree  && boxOne !== "") {
       console.log(`${boxOne} wins!`);
      //  boxOne.addClass('win-cross');
      } else if (boxOne === boxFive && boxOne === boxNine  && boxOne !== "") {
        console.log(`${boxOne} wins!`);
      } else if (boxOne === boxFour && boxOne === boxSeven && boxOne !== "") {
        console.log(`${boxOne} wins!`);
      } else if (boxTwo === boxFive && boxTwo === boxEight  && boxTwo !== "") {
        console.log(`${boxTwo} wins!`);
      } else if (boxThree === boxSix && boxThree === boxNine  && boxThree !== "") {
        console.log(`${boxThree} wins!`);
      } else if (boxThree === boxFive && boxThree === boxSeven && boxThree !== "") {
        console.log(`${boxThree} wins!`);
        // xWin();
        // game = 'gameover';
      }  
      else if (boxFour === boxFive && boxFour === boxSix && boxFour !== "") {
        console.log(`${boxFour} wins!`);
      } else if (boxSeven === boxEight && boxSeven === boxNine && boxSeven !== "") {
        console.log(`${boxSeven} wins!`);
      } else if (
        // tie conditions
        boxOne !== '' &&
        boxTwo !== '' &&
        boxThree !== '' &&
        boxFour !== '' &&
        boxFive !== '' &&
        boxSix !== '' &&
        boxSeven !== '' &&
        boxEight !== '' &&
        boxNine !== ''
      ) {
        tie();
      }
      $(this).removeClass('hover');
    }
  }
});

// change background of the field while hover (make different colors later)
field.mouseover(function () {
  if (game === 'gameover') {
    // block the clicking
    console.log(game);
  } else {
    if ($(this).html() === '') {
      $(this).addClass('hover');
    }
  }
});
field.mouseout(function () {
  $(this).removeClass('hover');
});

// Crosses win
const xWin = () => {
  // change the text of the message
  message.text('Crosses, you WIN!');
  oTurnIcon.addClass('hidden');
  xTurnIcon.removeClass('hidden');

  // Block further game
  // EXTRA: Cross animation or design
};

const oWin = () => {
  // change the text of the message
  message.text('Holes, you WIN!');
  xTurnIcon.addClass('hidden');
  oTurnIcon.removeClass('hidden');
  // Block further game
  // EXTRA: Holes animation or design
};

const tie = () => {
  message.text(`It's a tie!`);
};

// Clear field button
$('.clear').on('click', function (event) {
  $('.field').empty();
  message = $('#message').text('Crosses, your turn!');
  turn = 1;
  game = ' ';
});
