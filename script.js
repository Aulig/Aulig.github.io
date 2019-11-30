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