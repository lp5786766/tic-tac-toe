// $('.field').on('click', function (event) {
//   alert('clicked!');
// });

// change background of the field while hover (make different colors later)
$('.field').hover(
  function () {
    if ($(this).html() === '') {
      $(this).addClass('hover');
    }
  },
  function () {
    $(this).removeClass('hover');
  }
);

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
let turn = 1;
$('.field').on('click', function (event) {
  if ($(this).html() === '') {
    const x = $('<p>x</p>').addClass('token');
    const o = $('<p>o</p>').addClass('token');
    // if o turn
    if (turn === 1) {
      $(this).append(x);
      turn = 0;
    } else if (turn === 0) {
      $(this).append(o);
      turn = 1;
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
    if (boxOne === 'x' && boxTwo === 'x' && boxThee === "x") {
      // change the text of the message
      crossWin();
    }

    $(this).removeClass('hover');
  }
});

// Crosses win
const crossWin = () => {
  message = $('#message').text('Crosses, you WIN!');
};

// Clear field button
$('.clear').on('click', function (event) {
  $('.field').empty();
  message = $('#message').text('Crosses, your turn!');
  turn = 1;
});
