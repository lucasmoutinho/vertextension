let options = {
  type: "basic",
  title: "Hora de bater o ponto!",
  message: "Entre no Ahgora e bata seu ponto!",
  iconUrl: "images/ahgora.jpg"
};

// On Alarm
chrome.alarms.onAlarm.addListener(function (alarm) {
  chrome.notifications.create(options);
});

// Notifications CLick
chrome.notifications.onClicked.addListener(function () {
  chrome.tabs.create({ 'url': "https://www.ahgora.com.br/batidaonline" })
});