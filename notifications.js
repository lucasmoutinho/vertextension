var options = {
  type: "basic", 
  title: "Hora de bater o ponto!",
  message: "Entre no Ahgora e bata seu ponto!", 
  iconUrl: "images/ahgora.jpg"
};


// function clickHandler(e) {
  chrome.notifications.create(options);
  chrome.notifications.onClicked.addListener(redirect);
// }

function redirect() {
  console.log("Teste de clique")
}


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('messageLink').addEventListener('click', clickHandler);
})