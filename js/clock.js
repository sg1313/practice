const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(new Date().getHours());
  const minutes = String(new Date().getMinutes());
  const seconds = String(new Date().getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
