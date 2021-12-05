$(document).ready(function () {

// These functions expand the rooms when you click on them
  $('#office').click(function () {
    $(this).toggleClass('cur');
    $('#living_room').toggle();
    $('#master_bedroom').toggle();
    $('#guest_room').toggle();
    $('#kitchen').toggle();
    $('#dining_room').toggle();
    $('#bathroom').toggle();
    return false;
  });

  $('#living_room').click(function () {
    $(this).toggleClass('cur');
    $('#office').toggle();
    $('#master_bedroom').toggle();
    $('#guest_room').toggle();
    $('#kitchen').toggle();
    $('#dining_room').toggle();
    $('#bathroom').toggle();
    return false;
  });
  
  $('#master_bedroom').click(function () {
    $(this).toggleClass('cur');
    $('#office').toggle();
    $('#living_room').toggle();
    $('#guest_room').toggle();
    $('#kitchen').toggle();
    $('#dining_room').toggle();
    $('#bathroom').toggle();
    return false;
  });
  
  $('#guest_room').click(function () {
    $(this).toggleClass('cur');
    $('#office').toggle();
    $('#master_bedroom').toggle();
    $('#living_room').toggle();
    $('#kitchen').toggle();
    $('#dining_room').toggle();
    $('#bathroom').toggle();
    return false;
  });
  
  $('#kitchen').click(function () {
    $(this).toggleClass('cur');
    $('#office').toggle();
    $('#master_bedroom').toggle();
    $('#guest_room').toggle();
    $('#living_room').toggle();
    $('#dining_room').toggle();
    $('#bathroom').toggle();
    return false;
  });
  
  $('#dining_room').click(function () {
    $(this).toggleClass('cur');
    $('#office').toggle();
    $('#master_bedroom').toggle();
    $('#guest_room').toggle();
    $('#kitchen').toggle();
    $('#living_room').toggle();
    $('#bathroom').toggle();
    return false;
  });
  
  $('#bathroom').click(function () {
    $(this).toggleClass('cur');
    $('#office').toggle();
    $('#master_bedroom').toggle();
    $('#guest_room').toggle();
    $('#kitchen').toggle();
    $('#dining_room').toggle();
    $('#living_room').toggle();
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
