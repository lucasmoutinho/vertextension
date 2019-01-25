let optionsEntrance = {
  type: "image",
  title: "Hora de bater o ponto!",
  message: "Entre no Ahgora e bata seu ponto!",
  iconUrl: "images/ahgora.jpg",
  imageUrl: "images/start.jpg",
  requireInteraction: true
};

let optionsLunch = {
  type: "image",
  title: "Saindo para o almoço!?",
  message: "Não esqueça de bater o ponto antes de sair!",
  iconUrl: "images/ahgora.jpg",
  imageUrl: "images/lunch.jpg",
  items: { title: "Clique aqui", message: "Agora" },
  requireInteraction: true
};

let optionsLunchExit = {
  type: "image",
  title: "Voltando do break!?",
  message: "Aproveite e bata o ponto!",
  iconUrl: "images/ahgora.jpg",
  imageUrl: "images/exitlunch.jpg",
  requireInteraction: true
};

let optionsExit = {
  type: "image",
  title: "O dia está acabando...",
  message: "Não esqueça de bater o ponto na saída!",
  iconUrl: "images/ahgora.jpg",
  imageUrl: "images/end.jpg",
  requireInteraction: true
};

// Lunch time alarms

let todayDate = new Date(Date.now())
let lunchTime = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 12, 0, 0, 0)
let lunchExitTime = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 14, 0, 0, 0)


// On Alarm
chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === 'EntranceAlarm'){
    chrome.notifications.create(optionsEntrance);
  }
  else if (alarm.name === 'LunchAlarm') {
    chrome.notifications.create(optionsLunch);
  }
  else if (alarm.name === 'LunchExitAlarm') {
    chrome.notifications.create(optionsLunchExit);
  }
  else if (alarm.name === 'ExitAlarm') {
    chrome.notifications.create(optionsExit);
  }
});

// Notifications CLick
chrome.notifications.onClicked.addListener(function () {
  chrome.tabs.create({ 'url': "https://www.ahgora.com.br/batidaonline" })
});