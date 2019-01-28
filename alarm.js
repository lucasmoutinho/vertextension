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

function createAlarm(MomentName, TodayDate)
{
  // Time to repeat is measured in minuets 
  // So 60 minutes per hour times 24 hours per day times 7 days give us a week
  const INTERVAL_TO_REPEAT = 24*60*7

  let inputname = MomentName.concat("AlarmInput") 
  let TimeResponse = document.getElementById(inputname).value

  let HourAndMinute = TimeResponse.split(":")

  let AlarmTime = new Date(TodayDate.getFullYear(),TodayDate.getMonth(),TodayDate.getDate(), HourAndMinute[0], HourAndMinute[1],0,0)

  if( TodayDate.getTime() > AlarmTime.getTime() ){
    AlarmTime.setDate( AlarmTime.getDate() + 1 )
  }

  let AlarmName = MomentName.concat('Alarm')

  chrome.alarms.create( AlarmName, {
    when: AlarmTime.getTime(), periodInMinutes: INTERVAL_TO_REPEAT
  });

  console.log(AlarmTime)

}

function areEntriesValid()
{
  let entranceTimeResponse = document.getElementById('EntranceAlarmInput').value
  let lunchTimeResponse = document.getElementById('LunchAlarmInput').value
  let lunchExitTimeResponse = document.getElementById('LunchExitAlarmInput').value
  let exitTimeResponse = document.getElementById('ExitAlarmInput').value

  // Se qualquer uma das entradas for nula, o comportamento não é executado
  if( entranceTimeResponse && lunchTimeResponse && lunchExitTimeResponse && exitTimeResponse ) {
    return true
  } else {
    return false
  }
}

function clickHandler(e) {

  let TodayDate = new Date(Date.now())

  if ( areEntriesValid() ){
    createAlarm("Entrance", TodayDate)
    createAlarm("Lunch", TodayDate)
    createAlarm("LunchExit", TodayDate)
    createAlarm("Exit", TodayDate)

    Success();
  } else {
    Failure();
  }

/*
  
*/
}

// On Click

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('toggleAlarm').addEventListener('click', clickHandler);
})