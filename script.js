$(document).ready(function () {

  $("#master_bedroom").click(function () {
    $(this).css({
      'postion': 'absolute', 'top': '100px', 'left': '100px', 'z-index': '100',
      'width': '500px', 'float': 'none', 'height': '500px', 'background-color': 'green'
    });
  });

  $('#office').click(function () {
    $(this).toggleClass('cur', 'room');
    return false;
  });



  $(".one").click(function () {
    $(this).hide();
    $(".two").animate({
      opacity: 1.00,
    }, 5, "linear");
  });

  $(".two").click(function () {
    $(this).hide();
    $("#gwen").animate({
      opacity: 1.00,
    }, 5, "linear");
  });

  $("#gwen").click(function () {
    $(this).hide();
    $("#cletus").animate({
      opacity: 1.00,
    }, 5, "linear");
  });

  $("#cletus").click(function () {
    $(this).hide(); /* this allows the next thing to come up and the other to go away */
    $("#betty").animate({
      opacity: 1.00,
    }, 5, "linear");
  });

  $("#betty").click(function () {
    $(this).hide();
    $("#fred").animate({
      opacity: 1.00,
    }, 5, "linear");
  });

  $("#fred").click(function () {
    $(this).hide();
    $("#bubba").animate({
      opacity: 1.00,
    }, 5, "linear");
  });

  $("#bubba").click(function () {
    $(this).hide();
    $("#effie").animate({
      opacity: 1.00,
    }, 5, "linear");
  });

  $("#effie").click(function () {
    $(this).hide();
    $("#you").animate({
      opacity: 1.00,
    }, 5, "linear");
  });

  $("#you").click(function () {
    $(this).hide();
    $(".three").animate({
      opacity: 1.00,
    }, 5, "linear");
  });

  $(".three").click(function () {
    $(this).hide();
  }, 5, "linear");



}); //end doc.ready
