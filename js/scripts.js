// Back-End JS

var answer1, answer2, answer3, answer4, answer5, ruby, css, csharp, javandroid, option, other

var calculate = function(answer1, answer2, answer3, answer4) {

  if(!answer1 || !answer2 || !answer4 || !answer5 )
  {
    alert("please make selections.")
  }
  else if(answer1 === "app" && answer2 === "creative" && answer3 === "coffee-shop" || answer2 === "creative" && answer3 === "coffee-shop" && answer4 === "ux" || answer1 === "app" && answer2 === "creative" && answer3 === "fun" || answer2 === "creative" && answer3 === "fun" && answer4 === "ux" )
  {
    css();
  }
  else if(answer1 === "company" && answer2 === "driven" && answer3 === "fun-enviornment" || answer2 === "driven" && answer3 === "fun-enviornment" && answer4 === "logic" || answer2 === "driven" && answer3 === "fun-enviornment" && answer4 === "ux")
  {
    ruby();
  }
  else if (answer1 === "software" && answer2 === "problem-solving" && answer3 === "established-business" || answer2 === "problem-solving" && answer3 === "established-business" && answer4 === "logic" || answer1 === "software" && answer4 === "logic" && answer5 === "windows")
  {
    csharp();
  }
  else if (answer1 === "software" && answer2 === "creative" && answer3 === "established-business" || answer2 === "creative" && answer3 === "established-business" && answer4 === "logic" || answer1 === "software" && answer2 === "creative" && answer3 === "fun" || answer2 === "creative" && answer3 === "fun" && answer4 === "logic")
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
    $("#css, #c-sharp, #java-android, #other").hide();
  }
  css = function() {
    $("#css").show();
    $("#ruby, #c-sharp, #java-android, #other").hide();
  }
  csharp = function() {
    $("#c-sharp").show();
    $("#css, #ruby, #java-android, #other").hide();
  }
  javandroid = function() {
    $("#java-android").show();
    $("#css, #ruby, #c-sharp, #other").hide();
  }
  option = function() {
    $("#java-android, #c-sharp ").show();
    $("#css, #ruby, #other").hide();
  }
  other = function() {
    $("#other").show();
    $("#css, #ruby, #c-sharp, #java-android").hide();
  }
  $("#submit").click(function() {
    answer1 = $("#q1").val();
    answer2 = $("#q2").val();
    answer3 = $("#q3").val();
    answer4 = $("#q4").val();
    answer5 = $("#q5").val();
    calculate(answer1, answer2, answer3, answer4, answer5);
  });

});
