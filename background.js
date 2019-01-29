
'use strict'

let optionsEntrance = {
  type: "image",
  title: "Hora de bater o ponto! :)",
  message: "Entre no Ahgora e bata seu ponto!",
  iconUrl: "images/ahgora.jpg",
  imageUrl: "images/start.jpg",
  buttons: [{
    title: "Clique aqui para adiar 15 minutos...",
    iconUrl: "images/timer.png"
  }],
  requireInteraction: true
};

let optionsLunch = {
  type: "image",
  title: "Saindo para o almoço!?",
  message: "Não esqueça de bater o ponto antes de sair!",
  iconUrl: "images/ahgora.jpg",
  imageUrl: "images/lunch.jpg",
  requireInteraction: true
};

let optionsLunchExit = {
  type: "image",
  title: "Voltando do break!?",
  message: "Não deixe de bater o seu ponto.",
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

let optionsReminder = {
  type: "image",
  title: "Passaram-se 15 minutos...",
  message: "Já não está na hora de bater o ponto?",
  iconUrl: "images/ahgora.jpg",
  imageUrl: "images/end.jpg",
  buttons: [{
    title: "Ainda não... mais 15 minutos!",
    iconUrl: "images/timer.png"
  }],
  requireInteraction: true
};

// Lunch time alarms

let todayDate = new Date(Date.now())
let lunchTime = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 12, 0, 0, 0)
let lunchExitTime = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 14, 0, 0, 0)


// On Alarm
chrome.alarms.onAlarm.addListener(function (alarm) {
  let AlarmOptions = alarm.name.split("_")[0]
  if (AlarmOptions === 'EntranceAlarm') {
    chrome.notifications.create("optionsEntrance",optionsEntrance);
  } else if (AlarmOptions === 'LunchAlarm') {
    chrome.notifications.create("optionsLunch",optionsLunch);
  } else if (AlarmOptions === 'LunchExitAlarm') {
    chrome.notifications.create("optionsLunchExit",optionsLunchExit);
  } else if (AlarmOptions === 'ExitAlarm') {
    chrome.notifications.create("optionsExit)",optionsExit);
  }
  else if (AlarmOptions === 'ReminderAlarm') {
    chrome.notifications.create("optionsReminder",optionsReminder);
  }
});

// Notifications CLick
chrome.notifications.onClicked.addListener(function () {
  chrome.tabs.create({ 'url': "https://www.ahgora.com.br/batidaonline" })
});

// Reminder Buttons Click
chrome.notifications.onButtonClicked.addListener(function (notificationId) {
  let ReminderDate = new Date(Date.now())
  ReminderDate.setMinutes(ReminderDate.getMinutes() + 1)
  chrome.notifications.clear(notificationId)
  chrome.alarms.create("ReminderAlarm", {
    when: ReminderDate.getTime()
  });
});