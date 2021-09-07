//  variables
var session_seconds = "00";
var session_minutes = 25;

// Audio 
var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");


function template() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}

function start_timer() {
  click_sound.play();

 
  session_minutes = 24;
  session_seconds = 59;

  // Add the seconds and minutes to the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);


  // Function for minutes counter
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }

  // Function for seconds counter
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    // Check if the seconds and minutes counter has reached 0,if reached 0 then end the session
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
    // Stops the counter
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        document.getElementById("done").innerHTML =
          "Session Completed!! Take a Break";

        // Make the html message div visible
        document.getElementById("done").classList.add("show_message");

        // PLay the bell sound at the end of session
        bell.play();
      }

      // Reset the session seconds to 60
      session_seconds = 60;
    }
  }
}