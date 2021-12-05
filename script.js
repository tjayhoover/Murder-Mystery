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
