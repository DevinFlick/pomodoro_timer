$(document).ready(function(){
  var start= $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');

  start.on('click', startCountdown);

  function startCountdown(){
    setInterval(function(){
      var secondsVal = +seconds.text();
      if(secondsVal === 0){
        seconds.text(59);
      } else {
        if(secondsVal <= 10){
          seconds.text("0" + (secondsVal-1));
      } else {
        seconds.text(secondsVal -1);        }
        }

    }, 1000);
  }
});
