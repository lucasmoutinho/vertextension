var options = {
  type: "basic", 
  title: "My first Popup",
  message: "Wow man!", 
  iconUrl: "images/icon.png"
};


function clickHandler(e) {
  chrome.notifications.create(options);
  chrome.notifications.onClicked.addListener(redirect);
}

function redirect() {
  console.log("Teste de clique")
}


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('messageLink').addEventListener('click', clickHandler);
})