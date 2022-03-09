let turn = 'x';
let game;
let result;
let message = $('#message');
const field = $('.clickable');
const xTurnIcon = $('.x-turn-icon');
const oTurnIcon = $('.o-turn-icon');

// Gameplay: click field to enter your token:
field.on('click', function (event) {
    // appending to empty fields
    if ($(this).html() === '') {
      const x = $('<p>x</p>').addClass('token');
      const o = $('<p>o</p>').addClass('token');
      // according to turns
      if (turn === 'x') {
        $(this).append(x);
        turn = 'o';
        xTurnIcon.addClass('hidden');
        oTurnIcon.removeClass('hidden');
        message.text('Holes, your turn!');
      } else if (turn === 'o') {
        $(this).append(o);
        turn = 'x';
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
      
      // CHECK AGAINST WINNING COMBINATIONS FUNCTION:

      if (boxOne === boxTwo && boxOne === boxThree  && boxOne !== "") {
       result = boxOne;
       Win();
      } else if (boxOne === boxFive && boxOne === boxNine  && boxOne !== "") {
        result = boxOne;
        Win();
      } else if (boxOne === boxFour && boxOne === boxSeven && boxOne !== "") {
        result = boxOne;
        Win();
      } else if (boxTwo === boxFive && boxTwo === boxEight  && boxTwo !== "") {
        result = boxTwo;
        Win();
      } else if (boxThree === boxSix && boxThree === boxNine  && boxThree !== "") {
        result = boxThree;
        Win();
      } else if (boxThree === boxFive && boxThree === boxSeven && boxThree !== "") {
        result = boxThree;
        Win();
      } else if (boxFour === boxFive && boxFour === boxSix && boxFour !== "") {
        result = boxFour;
        Win();
      } else if (boxSeven === boxEight && boxSeven === boxNine && boxSeven !== "") {
        result = boxSeven;
        Win();
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
  return result;
});

// change background of the field while hover
field.mouseover(function () {
  if (game === 'gameover') {
  } else {
    if ($(this).html() === '') {

      $(this).addClass(`hover ${turn}`);
    }
  }
});
field.mouseout(function () {
  $(this).removeClass(`hover ${turn}`);
});

// Win
const Win = () => {
  // change the text of the message and icon
  if (result === 'x') {
    message.text('Crosses, you WIN!');
  oTurnIcon.addClass('hidden');
  xTurnIcon.removeClass('hidden');
  } else if (result === 'o') {
    message.text('Holes, you WIN!');
    xTurnIcon.addClass('hidden');
    oTurnIcon.removeClass('hidden');
  }
  game = "gameover";
};

const tie = () => {
  message.text(`It's a tie!`);
  xTurnIcon.removeClass('hidden');
  oTurnIcon.removeClass('hidden');
};

// Clear field button
$('.clear').on('click', function (event) {
  location.reload();
});