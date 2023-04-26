const screen = document.getElementById('screen');
const callButton = document.querySelector('.call');

function pressKey(key) {
  screen.textContent += key;
}

function clearScreen() {
  screen.textContent = "";
}

function updateScreen(data) {
  console.log(data);
  screen.textContent = JSON.stringify(data);
}

function getSalesforceData() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer token" }  
  };
  fetch("http://localhost:5000?url=https://empathetic-bear-bn867b-dev-ed.trailblaze.my.salesforce.com/services/apexrest/ura", requestOptions)
    .then((response) => response.json())
    .then((data) => {
        updateScreen(data);
    })
    .catch((error) => {
      updateScreen("Error: " + error);
    });
}

callButton.addEventListener('click', getSalesforceData)