$(document).ready(function() {

$("#top_left").click(function(){
    $(this).css({'postion': 'absolute', 'top': '100px', 'left': '100px', 'z-index': '100',
     'width': '500px', 'float': 'none', 'height': '500px', 'background-color': 'green'});





});


$('#top_right').click(function() {
  $(this).toggleClass('cur', 'room');
  return false;
})

$(".one").click(function(){
    $(this).hide();
    $( ".two" ).animate({
    opacity: 1.00,
  }, 5, function() {
  });

  });
   $(".two").click(function(){
    $(this).hide();
    $( ".three" ).animate({
    opacity: 1.00,
   }, 5, "linear");
});
  $(".three").click(function(){
    $(this).hide();
    $( ".four" ).animate({
    opacity: 1.00,
   }, 5, "linear");
});
  $(".four").click(function(){
    $(this).hide(); /* this allows the next thing to come up and the other to go away */
    $( ".five" ).animate({
    opacity: 1.00,
   }, 5, "linear");
});
  $(".five").click(function(){
    $(this).hide();
    $( ".six" ).animate({
    opacity: 1.00,
   }, 5, "linear");
});
  $(".six").click(function(){
    $(this).hide();
    $( ".seven" ).animate({
    opacity: 1.00, 
   }, 5, "linear");
});

});

}); //end doc.ready
