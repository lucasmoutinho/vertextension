// Notifications

let options = {
  type: "basic", 
  title: "Hora de bater o ponto!",
  message: "Entre no Ahgora e bata seu ponto!", 
  iconUrl: "images/ahgora.jpg"
};

function clickHandler(e) {
  chrome.notifications.create(options)


}

// On Click

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('messageLink').addEventListener('click', clickHandler);
})