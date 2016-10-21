// Back-End JS

var answer1, answer2, answer3, answer4, answer5, ruby, css, csharp, javandroid, other

var calculate = function(answer1, answer2, answer3, answer4) {

  if(
    answer1 === "app" && answer2 === "creative" && answer4 === "ux" || answer3 === "coffee-shop" && answer1 === "app" && answer5 === "both" || answer1 === "app" && answer3 === "fun-enviornment" && answer4 === "ux" )
  {
    css();
  }
  else if(answer1 === "company" && answer2 === "driven" && answer4 === "logic" || answer1 === "app" && answer3 === "fun-enviornment" && answer4 == "logic")
  {
    ruby();
  }
  else if (answer1 === "software" && answer3 === "established-business" && answer4 === "logic" || answer2 === "problem" && answer5 === "windows")
  {
    csharp();
  }
  else if (answer1 === "software" && answer3 === "established-business" && answer5 === "both" || answer1 === "software" && answer2 === "creative" || answer2 === "creative" && answer4 === "logic")
  {
    javandroid();
  }
  else {

  }
}



// Front-End Jquery
$(document).ready(function() {

  ruby = function() {
    $("#ruby").show();
    $("#css, #c-sharp, #java-android").hide();
  }
  css = function() {
    $("#css").show();
    $("#ruby, #c-sharp, #java-android").hide();
  }
  csharp = function() {
    $("#c-sharp").show();
    $("#css, #ruby, #java-android").hide();
  }
  javandroid = function() {
    $("#java-android").show();
    $("#css, #ruby, #c-sharp").hide();
  }
  other = function() {
    $("#other").show();
    $("#css, #ruby, #c-sharp, #java-android").hide();
  }
  $("#submit").submit(function() {
    answer1 = $("#q1").val();
    answer2 = $("#q2").val();
    answer3 = $("#q3").val();
    answer4 = $("#q4").val();
    answer5 = $("#q5").val();
  });

});
