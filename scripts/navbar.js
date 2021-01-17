   $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 550) { // check if user scrolled more than 50 from top of the browser window
          $("#navbar").css("background", "rgba(250, 250, 250, 1)"); // if yes, then change the color of class "navbar" to white
          $("#navbar").css("box-shadow", "0 -2px 20px rgba(0, 0, 0, 0.4)"); // if yes, then change the color of class "navbar" to white
        } else {
          $("#navbar").css("background", "transparent"); // if not, change it back to transparent
          $("#navbar").css("box-shadow", "none"); // if yes, then change the color of class "navbar" to white
        }
      });
    });