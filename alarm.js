function clickHandler(e) {
  let alarmName = 'FirstAlarm'
  chrome.alarms.create(alarmName, {
    when: Date.now() + 0.1, periodInMinutes: 0.5
  });
}

// On Click

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('toggleAlarm').addEventListener('click', clickHandler);
})