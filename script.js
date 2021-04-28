// $('.field').on('click', function (event) {
//   alert('clicked!');
// });


// change background of the field while hover (make different colors later)
$('.field').hover(
  function () {
    if ($(this).html() === "") {
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
// 1. Xs go first
// 2. Players go one by one.
// 3. Players cannot choose a filled field.
// 4. Player who gets his tokens in a row of three wins

// Append X on click
let turn = 1;
$('.field').on('click', function (event) {
  // console.log(turn);
  
  if ($(this).html() === "") {
    const x = $('<p>x</p>').addClass("token");
    const o = $('<p>o</p>').addClass("token");
    // if o turn
    if (turn === 1) {
      $(this).append(x);
      turn = 0;
    } else if (turn === 0) {
      $(this).append(o);
      turn = 1;
    }
    console.log(turn);

    // $(this).append(x);
    // const tokenId = $(this).attr('id');
    $(this).removeClass('hover')
    // alert(`${tokenId} clicked!`);
  } 
});


// Clear field button 
$('.clear').on('click', function (event) {
  $('.field').empty();
  // crosses turn
})
