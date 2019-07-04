$(function() {
   //$("p").click(function() {
      // makes the <p> element that you clicked on disappear
   //   $(this).hide("slow");
   //});
   
   $("button").mouseenter(function() {
      // make this button turn from red to blue
      $(this).removeClass("makeRed").addClass("makeBlue");
   });
   
   $("button").mouseleave(function() {
      // make this button turn from blue to red
      $(this).removeClass("makeBlue").addClass("makeRed");
   });
   
   // // alternative to using this to pick out a particular card
   // $(".card").mouseenter(function() {
   //    // array of class names
   //    var classNames = $(this).attr("class").split(" "); // e.g. ["card","four"]
   //    var cardClass = classNames[0];
   //    var className = classNames[1];

   //    if ($(this).css("background-color") == "rgb(255, 255, 255)") {
   //       // apply an inline style
   //       $("."+className).css("background-color","rgb(255, 255, 0)");   
   //    }
   // });
   
   // $(".card").mouseleave(function() {
   //    // array of class names
   //    var classNames = $(this).attr("class").split(" "); // e.g. ["card","four"]
   //    var cardClass = classNames[0];
   //    var className = classNames[1];

   //    if ($(this).css("background-color") == "rgb(255, 255, 0)") {
   //       // apply an inline style
   //       $("."+className).css("background-color","rgb(255, 255, 255)");   
   //    }
   // });
   
   $(".card").click(function() {
      $(this).toggleClass("highlight");
   });
   
   // toggleClass()
   // click to make font bigger, click again to go back to original size
   $("h2").on("click", function() {
      $(this).toggleClass("biggerFont");
   });
   
   // hide buttons that are not highlighted
   $("#select_btn").click(function() {
      $(".card:not(.highlight)").hide("slow");
   });
   
   // show all
   $("#all_btn").click(function() {
      $(".card").show();
   });
});