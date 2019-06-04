$(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $(".clickable").click(function() {
    $("#initially-hidden").fadeIn();
  });

  $(".clickable").click(function() {
    $("#initially-showing").fadeOut(5000);
  });

  $(".new_clickable").click(function() {
    $("#initially-faddedOut").fadeToggle();
  });
  // $(".new_clickable").click(function() {
  //   $("#initially-faddedIn").fadeIn();
  // });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    $("body").addClass("text-color");
  });
  
  $("button#light").click(function() {
    $("body").removeClass();
  });

});
