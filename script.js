$(document).ready(function() {

$("#top_left").click(function(){
    $(this).css({'postion': 'absolute', 'top': '100px', 'left': '100px', 'z-index': '100',
     'width': '500px', 'float': 'none', 'height': '500px', 'background-color': 'green'});





});


$('#top_right').click(function() {
  $(this).toggleClass('cur', 'room');
  return false;
})


}); //end doc.ready