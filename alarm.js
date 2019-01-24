function clickHandler(e) {
  let alarmName = 'FirstAlarm'
  chrome.alarms.create(alarmName, {
    delayInMinutes: 0.1, periodInMinutes: 0.1
  });
}

// On Click

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('toggleAlarm').addEventListener('click', clickHandler);
})