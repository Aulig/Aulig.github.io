var box = document.getElementById('box');

function onDeviceProximityChanged(event) {
  document.getElementById('deviceValue').innerHTML = event.value + ' cm (' + event.min + '-' + event.max + ' cm range)';
  
  var size = Math.min(200, Math.max(20, 500 / (event.value || 1)));
  
  box.style.width = size + 'px';
  box.style.height = size + 'px';
}

function onUserProximityChanged(event) {
  document.getElementById('nearValue').innerHTML = event.near ? 'near' : 'rather far';
  box.style.backgroundColor = event.near ? 'red' : 'green';
}

function update(illuminance) {
  document.getElementById("value").innerHTML = illuminance + " lux";

  var colorPart = Math.min(255, illuminance).toFixed(0);
  document.getElementById("lightintensitybox").style.backgroundColor =
    "rgb(" + colorPart + ", " + colorPart + ", " + colorPart + ")";
}

if ("AmbientLightSensor" in window) {
  try {
    var sensor = new AmbientLightSensor();
    sensor.addEventListener("reading", function (event) {
      update(sensor.illuminance);
    });
    sensor.start();
  } catch (e) {
    console.error(e);
  }
}
if ("ondevicelight" in window) {
  function onUpdateDeviceLight(event) {
    update(event.value);
  }
  
  window.addEventListener("devicelight", onUpdateDeviceLight);
}