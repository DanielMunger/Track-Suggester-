// Back-End JS

var answer1, answer2, answer3, answer4, ruby, css, c-sharp

var calculate = function(answer1, answer2, answer3, answer4) {

  if(
    answer1 === "app" && answer2 === "creative" || answer3 === "coffee-shop" && answer4 === "ux" || answer3 === "fun-enviornment" && answer4 === "ux")
    {
    css();
    }
  else if(answer1 === "company" && answer2 === "driven" || answer3 === "fun-enviornment" &&  )
  {
    ruby();
  }
}



// Front-End Jquery
$(document).ready(function(event) {

  ruby = function() {
    $("#ruby").show();
    $("#css, #c-sharp").hide();
  }
  css = function() {
    $("#css").show();
    $("#ruby, #c-sharp").hide();
  }
  c-sharp = function() {
    $("#c-sharp").show();
    $("#css, #ruby").hide();
  }
  $("#submit").click(function() {
    answer1 = $("#q1").val();
    answer2 = $("#q1").val();
    answer3 = $("#q1").val();
    answer4 = $("#q1").val();
  });
  event.preventDefault();
});
