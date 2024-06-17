// Funktio päivittämään nopeusmittarin näytön pelin nopeuden perusteella
function updateSpeedometer(speed) {
  let meterBar = document.getElementById("meter-bg-bar");
  let maxSpeed = 180; // Oletettu maksiminopeus
  let strokeDashoffset = 615 - (speed / maxSpeed) * 615;
  meterBar.style.strokeDashoffset = strokeDashoffset;

  let speedDisplay = document.getElementById("speed");
  speedDisplay.textContent = speed + " km/h";
}

// Esimerkki nopeuden päivittämisestä (korvaa pelin logiikalla)
setInterval(() => {
  let randomSpeed = Math.floor(Math.random() * 181); // Satunnainen nopeus 0-180 km/h
  updateSpeedometer(randomSpeed);
}, 1000);
