// $('.field').on('click', function (event) {
//   alert('clicked!');
// });
let turn = 1;
let message = $('#message');
const field = $('.clickable');
let game;

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

        message.text('Holes, your turn!');
      } else if (turn === 0) {
        $(this).append(o);
        turn = 1;
        message.text('Crosses, your turn!');
      }
      // "turn" decides whose turn is NEXT:
      let boxOne = $('#1').text();
      let boxTwo = $('#2').text();
      let boxThee = $('#3').text();
      let boxFour = $('#4').text();
      let boxFive = $('#5').text();
      let boxSix = $('#6').text();
      let boxSeven = $('#7').text();
      let boxEight = $('#8').text();
      let boxNine = $('#9').text();
      console.log(turn);
      // CHECK AGAINST WINNING COMBINATIONS FUNCTION:
      if (boxOne === 'x' && boxTwo === 'x' && boxThee === 'x') {
        xWin();
        game = 'gameover';
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

// Game of tic tac toe

// Adding Xs and Os
// Rules:
// 1. Xs go first - DONE
// 2. Players go one by one. - DONE
// 3. Players cannot choose a filled field. - DONE
// 4. Player who gets his tokens in a row of three wins:
// 4.1 clg all 9 squares after each turn.
// 4.2 check against winning combinations

// Append X on click

// Crosses win
const xWin = () => {
  // change the text of the message
  message.text('Crosses, you WIN!');

  // Block further game
  // EXTRA: Cross animation or design
};

const oWin = () => {
  // change the text of the message
  message.text('Holes, you WIN!');
  // Block further game
  // EXTRA: Holes animation or design
};

// Clear field button
$('.clear').on('click', function (event) {
  $('.field').empty();
  message = $('#message').text('Crosses, your turn!');
  turn = 1;
});
