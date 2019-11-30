
function onDeviceProximityChanged(event) {
  document.getElementById('distanceValue').innerHTML = event.value + ' cm (' + event.min + '-' + event.max + ' cm range)';
  
}

function onUserProximityChanged(event) {
  document.getElementById('nearValue').innerHTML = event.near ? 'near' : 'rather far';
}

function update(illuminance) {
  document.getElementById("lightValue").innerHTML = illuminance + " lux";
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