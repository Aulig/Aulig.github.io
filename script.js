
function onDeviceProximityChanged(event) {
  document.getElementById('distanceValue').innerHTML = event.value + ' cm (' + event.min + '-' + event.max + ' cm range)';
  
}

function onUserProximityChanged(event) {
  document.getElementById('nearValue').innerHTML = event.near ? 'near' : 'rather far';
}

function updateLight(event) {
	
  document.getElementById("lightValue").innerHTML = event.value + " lux";
}

window.addEventListener('deviceproximity', onDeviceProximityChanged);
window.addEventListener('userproximity', onUserProximityChanged);

if ("ondevicelight" in window) {
	  
  window.addEventListener("devicelight", updateLight);
}