let options = {
  type: "basic",
  title: "Hora de bater o ponto!",
  message: "Entre no Ahgora e bata seu ponto!",
  iconUrl: "images/ahgora.jpg"
};


chrome.alarms.onAlarm.addListener(function (alarm) {
  chrome.notifications.create(options);
});