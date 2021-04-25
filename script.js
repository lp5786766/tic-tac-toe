// $('.field').on('click', function (event) {
//   alert('clicked!');
// });


// change background of the field while hover (make different colors later)
$('.field').hover(
  function () {
    $(this).addClass('hover');
  },
  function () {
    $(this).removeClass('hover');
  }
);
// Game of tic tac toe

// Adding Xs and Os
// Rules:
// 1. Xs go first
// 2. Players go one by one.
// 3. Players cannot choose a filled field.
// 4. Player who gets his tokens in a row of three wins

// Append X on click

$('.field').on('click', function (event) {
  const x = $('<p>x</p>').addClass("token");
  $(this).append(x);
});


// Clear field button 

