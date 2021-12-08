$(document).ready(function () {

  // These functions expand the rooms when you click on them
  // If you are adding clues, this is where you .show() the button. Make sure it is in the right room.
  $('#office').click(function () {
    $('#o').toggleClass('cur');
    $('#lr').toggle();
    $('#mb').toggle();
    $('#gr').toggle();
    $('#k').toggle();
    $('#dr').toggle();
    $('#br').toggle();
    return false;
  });

  $('#living_room').click(function () {
    $('#lr').toggleClass('cur');
    $('#o').toggle();
    $('#mb').toggle();
    $('#gr').toggle();
    $('#k').toggle();
    $('#dr').toggle();
    $('#br').toggle();
    $(".button1").toggle();
    return false;
  });

  $('#master_bedroom').click(function () {
    $('#mb').toggleClass('cur');
    $('#o').toggle();
    $('#lr').toggle();
    $('#gr').toggle();
    $('#k').toggle();
    $('#dr').toggle();
    $('#br').toggle();
    return false;
  });

  $('#guest_room').click(function () {
    $('#gr').toggleClass('cur');
    $('#o').toggle();
    $('#mb').toggle();
    $('#lr').toggle();
    $('#k').toggle();
    $('#dr').toggle();
    $('#br').toggle();
    $(".button3").toggle();
    return false;
  });
  
  $('#office').click(function () {
    $('#o').toggleClass('cur');
    $('#lr').toggle();
    $('#mb').toggle();
    $('#gr').toggle();
    $('#k').toggle();
    $('#dr').toggle();
    $('#br').toggle();
    $(".button7").toggle();
    return false;
  });

  $('#living_room').click(function () {
    $('#lr').toggleClass('cur');
    $('#o').toggle();
    $('#mb').toggle();
    $('#gr').toggle();
    $('#k').toggle();
    $('#dr').toggle();
    $('#br').toggle();
    $(".button1").toggle();
    $(".button6").toggle();
    return false;
  });

  $('#master_bedroom').click(function () {
    $('#mb').toggleClass('cur');
    $('#o').toggle();
    $('#lr').toggle();
    $('#gr').toggle();
    $('#k').toggle();
    $('#dr').toggle();
    $('#br').toggle();
    $(".button8").toggle();
    $(".button4").toggle();
    return false;
  });

  $('#guest_room').click(function () {
    $('#gr').toggleClass('cur');
    $('#o').toggle();
    $('#mb').toggle();
    $('#lr').toggle();
    $('#k').toggle();
    $('#dr').toggle();
    $('#br').toggle();
    $(".button3").toggle();
    return false;
  });

  $('#kitchen').click(function () {
    $('#k').toggleClass('cur');
    $('#o').toggle();
    $('#mb').toggle();
    $('#gr').toggle();
    $('#lr').toggle();
    $('#dr').toggle();
    $('#br').toggle();
    $(".button2").toggle();
    $(".button9").toggle();
    return false;
  });

  $('#dining_room').click(function () {
    $('#dr').toggleClass('cur');
    $('#o').toggle();
    $('#mb').toggle();
    $('#gr').toggle();
    $('#k').toggle();
    $('#lr').toggle();
    $('#br').toggle();
    $(".button10").toggle();
    return false;
  });

  $('#bathroom').click(function () {
    $('#br').toggleClass('cur');
    $('#o').toggle();
    $('#mb').toggle();
    $('#gr').toggle();
    $('#k').toggle();
    $('#dr').toggle();
    $('#lr').toggle();
    $(".button5").toggle();
    $(".button11").toggle();
    return false;
  });


  // These functions allow the user to flip through the story
  // Breana coded this up, I (Tyler) made a few slight changes to fix the issue with being able to go
  // from the first to the last without going through the whole story
  $(".one").click(function () {
    $(this).hide();
    $(".two").show();
  });

  $(".two").click(function () {
    $(this).hide();
    $("#gwen").show();
  });

  $("#gwen").click(function () {
    $(this).hide();
    $("#cletus").show();
  });

  $("#cletus").click(function () {
    $(this).hide(); /* this allows the next thing to come up and the other to go away */
    $("#betty").show();
  });

  $("#betty").click(function () {
    $(this).hide();
    $("#fred").show();
  });

  $("#fred").click(function () {
    $(this).hide();
    $("#bubba").show();
  });

  $("#bubba").click(function () {
    $(this).hide();
    $("#effie").show();
  });

  $("#effie").click(function () {
    $(this).hide();
    $("#you").show();
  });

  $("#you").click(function () {
    $(this).hide();
    $(".three").show();
  });

}); //end doc.ready
