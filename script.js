$('.field').on('click', function (event) {
  alert('clicked!');
});


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

//
