function Success() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function Failure() {
  var x = document.getElementById("snackbarfailure");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function clickHandler(e) {
  let timeResponse = document.getElementById('entranceAlarm').value
  if(timeResponse){
    let array = timeResponse.split(":")
    let todayDate = new Date(Date.now())
    let alarmTime = new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate(),array[0],array[1],0,0)
    if(todayDate.getTime() > alarmTime.getTime()){
      alarmTime.setDate(alarmTime.getDate() + 1)
    }
    let alarmName = 'FirstAlarm'
    chrome.alarms.create(alarmName, {
      when: alarmTime.getTime(), periodInMinutes: 1440
    });
    Success();
  }else{
    Failure();
  }
}

// On Click

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('toggleAlarm').addEventListener('click', clickHandler);
})