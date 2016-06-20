$(document).ready(function(){
  var start= $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');

  start.on('click', startCountdown);

  function startCountdown(){
    setInterval(function(){
      var secondsVal = seconds.text();
      if(secondsVal === 0){
}
        else{
          seconds.text(59);
        }

    }, 1000);
  }
});
