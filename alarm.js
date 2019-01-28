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
  let entranceTimeResponse = document.getElementById('EntranceAlarmInput').value
  let lunchTimeResponse = document.getElementById('LunchAlarmInput').value
  let lunchExitTimeResponse = document.getElementById('LunchExitAlarmInput').value
  let exitTimeResponse = document.getElementById('ExitAlarmInput').value

  // Se qualquer uma das entradas for nula, o comportamento não é executado
  if( entranceTimeResponse && lunchTimeResponse && lunchExitTimeResponse && exitTimeResponse){
    let entranceArray = entranceTimeResponse.split(":")
    let lunchArray = lunchTimeResponse.split(":")
    let lunchExitArray = lunchExitTimeResponse.split(":")
    let exitArray = exitTimeResponse.split(":")

    let todayDate = new Date(Date.now())

    let entranceAlarmTime = new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate(),entranceArray[0],entranceArray[1],0,0)
    let lunchAlarmTime = new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate(),lunchArray[0],lunchArray[1],0,0)
    let lunchExitAlarmTime = new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate(),lunchExitArray[0],lunchExitArray[1],0,0)
    let exitAlarmTime = new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate(),exitArray[0], exitArray[1],0,0)
    
    if(todayDate.getTime() > entranceAlarmTime.getTime()){
      entranceAlarmTime.setDate(entranceAlarmTime.getDate() + 1)
    }

    if(todayDate.getTime() > lunchAlarmTime.getTime()){
      lunchAlarmTime.setDate(lunchAlarmTime.getDate() + 1)
    }

    if(todayDate.getTime() > lunchExitAlarmTime.getTime()){
      lunchExitAlarmTime.setDate(lunchExitAlarmTime.getDate() + 1)
    }

    if(todayDate.getTime() > exitAlarmTime.getTime()){
      exitAlarmTime.setDate(exitAlarmTime.getDate() + 1)
    }

    console.log(entranceAlarmTime)
    console.log(lunchAlarmTime)
    console.log(lunchExitAlarmTime)
    console.log(exitAlarmTime)

    chrome.alarms.create( entranceAlarmName, {
      when: entranceAlarmTime.getTime(), periodInMinutes: 1440
    });

    chrome.alarms.create( exitAlarmName, {
      when: exitAlarmTime.getTime(), periodInMinutes: 1440
    });

    chrome.alarms.create( lunchAlarmName, {
      when: lunchAlarmTime.getTime(), periodInMinutes: 1440
    });

    chrome.alarms.create(lunchExitAlarmName, {
      when: lunchExitAlarmTime.getTime(), periodInMinutes: 1440
    });

    Success();
  }else{
    Failure();
  }
}

function setInputValues(alarmName, inputName){
  chrome.alarms.get(alarmName, function (alarm) {
    if (alarm != null) {
      let entranceValue = new Date(alarm.scheduledTime)
      let entranceHour = entranceValue.getHours() + ""
      if (entranceHour.length == 1) {
        entranceHour = 0 + entranceHour
      }
      let entranceMinute = entranceValue.getMinutes() + ""
      if (entranceMinute.length == 1) {
        entranceMinute = 0 + entranceMinute
      }
      let entranceInputValue = entranceHour + ':' + entranceMinute
      document.getElementById(inputName).value = entranceInputValue
    }
  })
}

// On Click

let entranceAlarmName = 'EntranceAlarm'
let lunchAlarmName = 'LunchAlarm'
let lunchExitAlarmName = 'LunchExitAlarm'
let exitAlarmName = 'ExitAlarm'

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('toggleAlarm').addEventListener('click', clickHandler);
  setInputValues(entranceAlarmName, 'EntranceAlarmInput')
  setInputValues(lunchAlarmName, 'LunchAlarmInput')
  setInputValues(lunchExitAlarmName, 'LunchExitAlarmInput')
  setInputValues(exitAlarmName, 'ExitAlarmInput')
})