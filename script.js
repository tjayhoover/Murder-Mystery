$(document).ready(function () {

  // This counter keeps track of the number of clues.
  var count = 0;

  // This displays the number of clues to the user. Each time the user clicks on a new clue, this number is updated.
  $("#count").html(count);

  // This is the message that displays when the user tries to find more clues after already having 10.
  var found10 = "You have found ten clues. You must now guess the name of the killer!";

  // The functions below expand the rooms when you click on them.
  // They also display the clues, so the user can find them.
  // If the number of clues reaches 10, the user will no longer be able to
  // find any clues or enter any other rooms.
  $('#office').click(function () {
    if (count < 10 || (count >= 10 && $('#o').attr('class') == "cur")) {
      $('#o').toggleClass('cur');
      $('#o').toggleClass('office');
      $('#lr').toggle();
      $('#mb').toggle();
      $('#gr').toggle();
      $('#k').toggle();
      $('#dr').toggle();
      $('#br').toggle();
      $(".notes").toggle();
      $(".briefcase").toggle();
      if (count >= 10) alert(found10);
    } else alert(found10);
  });

  $('#living_room').click(function () {
    if (count < 10 || (count >= 10 && $('#lr').attr('class') == 'cur')) {
      $('#lr').toggleClass('cur');
      $('#lr').toggleClass('living_room');
      $('#o').toggle();
      $('#mb').toggle();
      $('#gr').toggle();
      $('#k').toggle();
      $('#dr').toggle();
      $('#br').toggle();
      $(".bloodstain1").toggle();
      $(".flowerpot").toggle();
      $(".bloodstain3").toggle();
      if (count >= 10) alert(found10);
    } else alert(found10);
  });

  $('#master_bedroom').click(function () {
    if (count < 10 || (count >= 10 && $('#mb').attr('class') == "cur")) {
      $('#mb').toggleClass('cur');
      $('#mb').toggleClass('master_bedroom');
      $('#o').toggle();
      $('#lr').toggle();
      $('#gr').toggle();
      $('#k').toggle();
      $('#dr').toggle();
      $('#br').toggle();
      $(".suitcase").toggle();
      $(".clothingonfloor").toggle();
      $(".clock").toggle();
      if (count >= 10) alert(found10);
    } else alert(found10);
  });

  $('#guest_room').click(function () {
    if (count < 10 || (count >= 10 && $('#gr').attr('class') == "cur")) {
      $('#gr').toggleClass('cur');
      $('#gr').toggleClass('guest_room');
      $('#o').toggle();
      $('#mb').toggle();
      $('#lr').toggle();
      $('#k').toggle();
      $('#dr').toggle();
      $('#br').toggle();
      $(".boots").toggle();
      $(".teddybear").toggle();
      $(".polish").toggle();
      if (count >= 10) alert(found10);
    } else alert(found10);
  });

  $('#kitchen').click(function () {
    if (count < 10 || (count >= 10 && $('#k').attr('class') == "cur")) {
      $('#k').toggleClass('cur');
      $('#k').toggleClass('kitchen');
      $('#o').toggle();
      $('#mb').toggle();
      $('#gr').toggle();
      $('#lr').toggle();
      $('#dr').toggle();
      $('#br').toggle();
      $(".knife").toggle();
      $(".bloodstain2").toggle();
      $(".fork").toggle();
      if (count >= 10) alert(found10);
    } else alert(found10);
  });

  $('#dining_room').click(function () {
    if (count < 10 || (count >= 10 && $('#dr').attr('class') == "cur")) {
      $('#dr').toggleClass('cur');
      $('#dr').toggleClass('dining_room');
      $('#o').toggle();
      $('#mb').toggle();
      $('#gr').toggle();
      $('#k').toggle();
      $('#lr').toggle();
      $('#br').toggle();
      $(".footprints").toggle();
      $(".bat").toggle();
      $(".timenote").toggle();
      if (count >= 10) alert(found10);
    } else alert(found10);
  });

  $('#bathroom').click(function () {
    if (count < 10 || (count >= 10 && $('#br').attr('class') == "cur")) {
      $('#br').toggleClass('cur');
      $('#br').toggleClass('bathroom');
      $('#o').toggle();
      $('#mb').toggle();
      $('#gr').toggle();
      $('#k').toggle();
      $('#dr').toggle();
      $('#lr').toggle();
      $(".hairbrush").toggle();
      $(".hand").toggle();
      $(".splatter").toggle();
      if (count >= 10) alert(found10);
    } else alert(found10);
  });


  // The functions below allow the user to click a clue, which makes a message pop up.
  // Also, the first time they click on a specific clue, the counter is incremented by 1.
  let bool1 = false;
  $('.briefcase').click(function () {
    if (count < 10) {
      alert("You have found a briefcase! As you open it, dust comes off. Looks like it has not been touched in quite some time!");
      if (bool1 == false) {
        count++;
        bool1 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool2 = false;
  $('.clock').click(function () {
    if (count < 10) {
      alert("You have found a clock! It has been exactly 13 minutes since the power came back on and 28 minutes since the movie started. ");
      if (bool2 == false) {
        count++;
        bool2 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool3 = false;
  $('.clothingonfloor').click(function () {
    if (count < 10) {
      alert("You have found clothing on the floor! Most of the clothing is a women's size medium and a men's size large.");
      if (bool3 == false) {
        count++;
        bool3 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool4 = false;
  $('.bat').click(function () {
    if (count < 10) {
      alert("You have found a bat! Didn't your freind Bubba Bomb play baseball?");
      if (bool4 == false) {
        count++;
        bool4 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool5 = false;
  $('.footprints').click(function () {
    if (count < 10) {
      alert("You have found footprints! They seem to be a size 10, but you can't tell if they belong to a women or a man");
      if (bool5 == false) {
        count++;
        bool5 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool6 = false;
  $('.notes').click(function () {
    if (count < 10) {
      alert("You have found notes! The note reads: He should watch out. He deserves what is coming to him. Show. No. Mercy.");
      if (bool6 == false) {
        count++;
        bool6 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool7 = false;
  $('.bloodstain2').click(function () {
    if (count < 10) {
      alert("You have found a bloodstain! The blood seems fresh!");
      if (bool7 == false) {
        count++;
        bool7 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool8 = false;
  $('.fork').click(function () {
    if (count < 10) {
      alert("You have found a fork! As you inspect it more, the one part of the fork is bent to the left");
      if (bool8 == false) {
        count++;
        bool8 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool9 = false;
  $('.hand').click(function () {
    if (count < 10) {
      alert("OMG you found John's body! He has a few stab wounds and he is covered in blood. These cuts are fresh and he is still bleeding. Unfortunetly as you go to check is he is breathing, you discover that he is not breathing.");
      if (bool9 == false) {
        count++;
        bool9 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool10 = false;
  $('.splatter').click(function () {
    if (count < 10) {
      alert("You have found a splatter! Based on the angle of the splatter, it looks like John was killed here");
      if (bool10 == false) {
        count++;
        bool10 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool11 = false;
  $('.knife').click(function () {
    if (count < 10) {
      alert("You have found a knife! This was the murder weapon. Looks like the killer did not have time to put it away");
      if (bool11 == false) {
        count++;
        bool11 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool12 = false;
  $('.hairbrush').click(function () {
    if (count < 10) {
      alert("You have found a hairbrush! The hairbrush has some brown hair on it");
      if (bool12 == false) {
        count++;
        bool12 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool13 = false;
  $('.bloodstain1').click(function () {
    if (count < 10) {
      alert("You have found a bloodtain! This looks old. It is a dark red and sort of faded");
      if (bool13 == false) {
        count++;
        bool13 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool14 = false;
  $('.flowerpot').click(function () {
    if (count < 10) {
      alert("Oh No... the flowerpot... its broken. It must have be kicked over in the power outage");
      if (bool14 == false) {
        count++;
        bool14 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool15 = false;
  $('.bloodstain3').click(function () {
    if (count < 10) {
      alert("You have found a bloodstain! This one looks fresh. It must be John's");
      if (bool15 == false) {
        count++;
        bool15 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool16 = false;
  $('.boots').click(function () {
    if (count < 10) {
      alert("You have found a boots! Upon inspecting the boots, you find that they are muddy and look worn. They must be teh killer's");
      if (bool16 == false) {
        count++;
        bool16 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool17 = false;
  $('.teddybear').click(function () {
    if (count < 10) {
      alert("You have found a HEADLESS teddy bear! Guess the killer was practicing");
      if (bool17 == false) {
        count++;
        bool17 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool18 = false;
  $('.polish').click(function () {
    if (count < 10) {
      alert("You have found polish! The polish does not look opened, but it is in a different spot than when you saw it earlier in the night");
      if (bool18 == false) {
        count++;
        bool18 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool19 = false;
  $('.suitcase').click(function () {
    if (count < 10) {
      alert("You have found a suitcase! The suitcase is packed with a man's clothes. It is almost packed like they were in a hurry");
      if (bool19 == false) {
        count++;
        bool19 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  let bool20 = false;
  $('.timenote').click(function () {
    if (count < 10) {
      alert("You have found a cryptic note! The note says: Haha, you will never catch me just like you will never talk to your friend John again");
      if (bool20 == false) {
        count++;
        bool20 = true;
        $("#count").html(count);
      }
    } else alert(found10);
  })

  // The functions below allow the user to flip through the story.
  $(".one").click(function () {
    $(this).hide(); // this allows the next thing to come up and the other to go away
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
    $(this).hide();
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
