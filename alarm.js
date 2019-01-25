function Success() {
  // Emite uma notificação quando o horário tem entrada correta
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function Failure() {
  // Emite uma notificação quando o horário tem entrada incorreta
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
    let alarmExitTime = new Date(alarmTime.getTime())
    alarmExitTime.setHours(alarmTime.getHours() + 8)

    console.log(alarmTime)
    console.log(alarmExitTime)

    let alarmName = 'EntranceAlarm'
    let alarmExitName = 'ExitAlarm'

    chrome.alarms.create(alarmName, {
      when: alarmTime.getTime(), periodInMinutes: 1440
    });

    chrome.alarms.create(alarmExitName, {
      when: alarmExitTime.getTime(), periodInMinutes: 1440
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