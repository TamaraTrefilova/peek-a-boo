$(function() {
  $("button#green").click(function() {
    $("body").removeClass();
      $("body").addClass("green-background");
    // $("body").css("background-color", "lightgreen");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

});
