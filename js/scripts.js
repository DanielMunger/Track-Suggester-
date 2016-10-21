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
  else if (answer1 === "software" && answer2 === "problem-solving" && answer3 === "fun-enviornment" && answer4 === "logic" && answer5 === "cross-platform")
  {
    combined1();
  }
  else if (answer1 === "company" && answer2 === "problem-solving" && answer3 === "fun-enviornment" && answer4 === "logic")
  {
    combined2();
  }
  else if (answer1 === "company" && answer2 === "creative" && answer3 === "fun-enviornment" && answer4 === "logic")
  {
    combined3()
  }
  else {
    other();
  }
}



// Front-End Jquery

$(document).ready(function() {

  ruby = function() {
    $("#ruby").slideToggle();
    $("#css, #c-sharp, #java-android, #other, .home-page").hide();
  }
  css = function() {
    $("#css").slideToggle();
    $("#ruby, #c-sharp, #java-android, #other, .home-page").hide();
  }
  csharp = function() {
    $("#c-sharp").slideToggle();
    $("#css, #ruby, #java-android, #other, .home-page").hide();
  }
  javandroid = function() {
    $("#java-android").slideToggle();
    $("#css, #ruby, #c-sharp, #other, .home-page").hide();
  }
  combined1 = function() {
    $("#java-android, #c-sharp").slideToggle();
    $("#css, #ruby, #other, .home-page").hide();
  }
  combined2 = function() {
    $("#java-android, #ruby").slideToggle();
    $("#css, #csharp, #other, .home-page").hide();
  }
  combined3 = function() {
    $("#css, #ruby").slideToggle();
    $("#ava-android, #csharp, #other, .home-page").hide();
  }
  other = function() {
    $("#other").slideToggle();
    $("#css, #ruby, #c-sharp, #java-android, .home-page").hide();
  }
  $("#submit").click(function() {
    answer1 = $("#q1").val();
    answer2 = $("#q2").val();
    answer3 = $("#q3").val();
    answer4 = $("#q4").val();
    answer5 = $("#q5").val();
    calculate(answer1, answer2, answer3, answer4, answer5);
  });
  $(".back").click(function() {
    $(".home-page").slideToggle();
    $("#css, #ruby, #c-sharp, #java-android, #other").hide();
  });
});
