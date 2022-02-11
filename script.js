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
// 1. Xs go first - DONE
// 2. Players go one by one. - DONE
// 3. Players cannot choose a filled field. - DONE
// 4. Player who gets his tokens in a row of three wins:
// 4.1 clg all 9 squares after each turn.
// 4.2 check against winning combinations

// Append X on click
let turn = 1;
$('.field').on('click', function (event) {
  let boxOne = $('#1').text();
  let boxTwo = $('#2').text();
  const boxThee = $('#3').text();
  const boxFour = $('#4').text();
  const boxFive = $('#5').text();
  const boxSix = $('#6').text();
  const boxSeven = $('#7').text();
  const boxEight = $('#8').text();
  const boxNine = $('#9').text();

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
    // "turn" decides whose turn is NEXT:
    console.log(turn);
    if (boxOne === "x"&& boxTwo === "x") {
      alert("X wins!");
    }
    // CHECK AGAINST WINNING COMBINATIONS FUNCTION:    

    
    console.log(`1A=${boxOne}`);
    console.log(`1B=${boxTwo}`);
    console.log(`1C=${boxThee}`);
    console.log(`2A=${boxFour}`);
    console.log(`2B=${boxFive}`);
    console.log(`2C=${boxSix}`);
    console.log(`3A=${boxSeven}`);
    console.log(`3B=${boxEight}`);
    console.log(`3C=${boxNine}`);
    




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
