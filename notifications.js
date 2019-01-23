// Notifications

let options = {
  type: "basic", 
  title: "Hora de bater o ponto!",
  message: "Entre no Ahgora e bata seu ponto!", 
  iconUrl: "images/ahgora.jpg"
};

function notifications(){
  chrome.notifications.create(options)
}

function clickHandler(e) {
  setTimeout(notifications, 5000);
}

// On Click

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('messageLink').addEventListener('click', clickHandler);
})