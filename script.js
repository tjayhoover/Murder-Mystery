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
    $(".notes").toggle();
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
    $(".bloodstain1").toggle();
    $(".flowerpot").toggle();
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
    $(".suitcase").toggle();
    $(".clothingonfloor").toggle();
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
    $(".boots").toggle();
    $(".teddybear").toggle();
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
    $(".knife").toggle();
    $(".bloodstain2").toggle();
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
    $(".footprints").toggle();
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
    $(".hairbrush").toggle();
    $(".hand").toggle();
    $(".splatter").toggle();
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
