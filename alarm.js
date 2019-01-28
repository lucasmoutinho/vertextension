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
  // Function which creates an alarm for each moment based on the computer date
  //

  // Time to repeat is measured in minuets 
  // So 60 minutes per hour times 24 hours per day times 7 days give us a week
  const INTERVAL_TO_REPEAT = 24*60*7
  const NUMBER_OF_DAYS_OF_THE_WEEK = 7
  const FRIDAY = 0
  const SUNDAY = 0

  let InputName = MomentName + "AlarmInput" 
  let TimeResponse = document.getElementById(InputName).value

  let HourAndMinute = TimeResponse.split(":")

  let AlarmDate = new Date(TodayDate.getFullYear(),TodayDate.getMonth(),TodayDate.getDate(), HourAndMinute[0], HourAndMinute[1],0,0)

  if( TodayDate.getTime() > AlarmDate.getTime() ){
    AlarmDate.setDate( AlarmDate.getDate() + 1 )
  }

  var count = 0;
  while (count < NUMBER_OF_DAYS_OF_THE_WEEK) {

    let AlarmName = MomentName + 'Alarm' + "_" + count

    AlarmDate.setDate( AlarmDate.getDay() + 1)

    if ( AlarmDate.getDay() != SUNDAY && AlarmDate.getDay() != SATURDAY ) { // Skip weekends      
      chrome.alarms.create( AlarmName, {
        when: AlarmDate.getTime(), periodInMinutes: INTERVAL_TO_REPEAT
      });
      console.log(AlarmDate)
    }

    count += 1 
  }



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