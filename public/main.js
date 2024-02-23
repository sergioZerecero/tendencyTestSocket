const socket = io.connect();
const inputCounter = document.getElementById('counter');
const loader = document.getElementById('loader');
const btnSend = document.getElementById("btnSend");

socket.on("server:count", (count) => {
  inputCounter.value = count;
  loader.style.display = "none";
  btnSend.disabled = false;
});

function sendLabel() {
  socket.emit("client:newguide", "nueva guia");
  loader.style.display = "block";
  btnSend.disabled = true;
}