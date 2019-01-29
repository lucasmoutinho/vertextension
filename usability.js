// Press enter on last input to click submit button 

var input = document.getElementById('ExitAlarmInput')

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("toggleAlarm").click();
  }
}); 


// On Click

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleAlarm').addEventListener('click', clickHandler);
    setInputValues( 'EntranceAlarm_0', 'EntranceAlarmInput')
    setInputValues( 'LunchAlarm_0', 'LunchAlarmInput')
    setInputValues( 'LunchExitAlarm_0', 'LunchExitAlarmInput')
    setInputValues( 'ExitAlarm_0', 'ExitAlarmInput')
  })