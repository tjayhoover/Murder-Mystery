$(document).ready(function () {

  var count = 0;
  // These functions expand the rooms when you click on them
  // If you are adding clues, this is where you .show() the button. Make sure it is in the right room.

  $('#office').click(function () {
    if (count < 10) {
      $('#o').toggleClass('cur');
      $('#lr').toggle();
      $('#mb').toggle();
      $('#gr').toggle();
      $('#k').toggle();
      $('#dr').toggle();
      $('#br').toggle();
      $(".notes").toggle();
      $(".briefcase").toggle();
    } else {
      alert("You have found at least ten clues. You must now guess who the killer was!");
    }
  });

  $('#living_room').click(function () {
    if (count < 10) {
      $('#lr').toggleClass('cur');
      $('#o').toggle();
      $('#mb').toggle();
      $('#gr').toggle();
      $('#k').toggle();
      $('#dr').toggle();
      $('#br').toggle();
      $(".bloodstain1").toggle();
      $(".flowerpot").toggle();
      $(".bloodstain3").toggle();
    } else {
      alert("You have found at least ten clues. You must now guess who the killer was!");
    }
  });

  $('#master_bedroom').click(function () {
    if (count < 10) {
      $('#mb').toggleClass('cur');
      $('#o').toggle();
      $('#lr').toggle();
      $('#gr').toggle();
      $('#k').toggle();
      $('#dr').toggle();
      $('#br').toggle();
      $(".suitcase").toggle();
      $(".clothingonfloor").toggle();
      $(".clock").toggle();
    } else {
      alert("You have found at least ten clues. You must now guess who the killer was!");
    }
  });

  $('#guest_room').click(function () {
    if (count < 10) {
      $('#gr').toggleClass('cur');
      $('#o').toggle();
      $('#mb').toggle();
      $('#lr').toggle();
      $('#k').toggle();
      $('#dr').toggle();
      $('#br').toggle();
      $(".boots").toggle();
      $(".teddybear").toggle();
      $(".polish").toggle();
    } else {
      alert("You have found at least ten clues. You must now guess who the killer was!");
    }
  });

  $('#kitchen').click(function () {
    if (count < 10) {
      $('#k').toggleClass('cur');
      $('#o').toggle();
      $('#mb').toggle();
      $('#gr').toggle();
      $('#lr').toggle();
      $('#dr').toggle();
      $('#br').toggle();
      $(".knife").toggle();
      $(".bloodstain2").toggle();
      $(".fork").toggle();
    } else {
      alert("You have found at least ten clues. You must now guess who the killer was!");
    }
  });

  $('#dining_room').click(function () {
    if (count < 10) {
      $('#dr').toggleClass('cur');
      $('#o').toggle();
      $('#mb').toggle();
      $('#gr').toggle();
      $('#k').toggle();
      $('#lr').toggle();
      $('#br').toggle();
      $(".footprints").toggle();
      $(".bat").toggle();
    } else {
      alert("You have found at least ten clues. You must now guess who the killer was!");
    }
  });

  $('#bathroom').click(function () {
    if (count < 10) {
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
    } else {
      alert("You have found at least ten clues. You must now guess who the killer was!");
    }
  });


  // When you click a clue, a message pops up. Also, the first time they click on a specific clue, the counter is incremented by 1.

  let bool1 = false;
  $('.briefcase').click(function () {
    alert("You have found a briefcase!");
    if (bool1 == false) {
      count++;
      bool1 = true;
    }
  })
  let bool2 = false;
  $('.clock').click(function () {
    alert("You have found a clock!");
    if (bool2 == false) {
      count++;
      bool2 = true;
    }
  })
  let bool3 = false;
  $('.clothingonfloor').click(function () {
    alert("You have found clothing on the floor!");
    if (bool3 == false) {
      count++;
      bool3 = true;
    }
  })
  let bool4 = false;
  $('.bat').click(function () {
    alert("You have found a bat!");
    if (bool4 == false) {
      count++;
      bool4 = true;
    }
  })
  let bool5 = false;
  $('.footprints').click(function () {
    alert("You have found footprints!");
    if (bool5 == false) {
      count++;
      bool5 = true;
    }
  })
  let bool6 = false;
  $('.notes').click(function () {
    alert("You have found notes!");
    if (bool6 == false) {
      count++;
      bool6 = true;
    }
  })
  let bool7 = false;
  $('.bloodstain2').click(function () {
    alert("You have found a bloodstain!");
    if (bool7 == false) {
      count++;
      bool7 = true;
    }
  })
  let bool8 = false;
  $('.fork').click(function () {
    alert("You have found a fork!");
    if (bool8 == false) {
      count++;
      bool8 = true;
    }
  })
  let bool9 = false;
  $('.hand').click(function () {
    alert("You have found a hand!");
    if (bool9 == false) {
      count++;
      bool9 = true;
    }
  })
  let bool10 = false;
  $('.splatter').click(function () {
    alert("You have found a splatter!");
    if (bool10 == false) {
      count++;
      bool10 = true;
    }
  })
  let bool11 = false;
  $('.knife').click(function () {
    alert("You have found a knife!");
    if (bool11 == false) {
      count++;
      bool11 = true;
    }
  })
  let bool12 = false;
  $('.hairbrush').click(function () {
    alert("You have found a hairbrush!");
    if (bool12 == false) {
      count++;
      bool12 = true;
    }
  })
  let bool13 = false;
  $('.bloodstain1').click(function () {
    alert("You have found a bloodtain!");
    if (bool13 == false) {
      count++;
      bool13 = true;
    }
  })
  let bool14 = false;
  $('.flowerpot').click(function () {
    alert("You have found a flowerpot!");
    if (bool14 == false) {
      count++;
      bool14 = true;
    }
  })
  let bool15 = false;
  $('.bloodstain3').click(function () {
    alert("You have found a bloodstain!");
    if (bool15 == false) {
      count++;
      bool15 = true;
    }
  })
  let bool16 = false;
  $('.boots').click(function () {
    alert("You have found a boots!");
    if (bool16 == false) {
      count++;
      bool16 = true;
    }
  })
  let bool17 = false;
  $('.teddybear').click(function () {
    alert("You have found a teddy bear!");
    if (bool17 == false) {
      count++;
      bool17 = true;
    }
  })
  let bool18 = false;
  $('.polish').click(function () {
    alert("You have found polish!");
    if (bool18 == false) {
      count++;
      bool18 = true;
    }
  })
  let bool19 = false;
  $('.suitcase').click(function () {
    alert("You have found a suitcase!" + count);
    if (bool19 == false) {
      count++;
      bool19 = true;
    }
  })

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

  $("input[name=wrongguess]").click(function () {
    window.open("storyend1.html");
  });

  $("#rightguess").click(function () {
    window.open("storyend2.html");
  });
  if (parseInt(count) > 10) {
    $("#guess_time").show();
  }

}); //end doc.ready
