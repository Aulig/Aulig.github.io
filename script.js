
function onDeviceProximityChanged(event) {
	
	document.getElementById('distanceValue').innerHTML = event.value + ' cm (' + event.min + '-' + event.max + ' cm range)';
}

function onUserProximityChanged(event) {

	if (event.near) {
		
		window.scrollBy({
		  top: 900,
		  behavior: 'smooth'
		});
	}

	document.getElementById('nearValue').innerHTML = event.near ? 'near' : 'far away';
}

function updateLight(event) {
	
	document.getElementById("lightValue").innerHTML = event.value + " lux";
}

window.onscroll = function(ev) {
	
	if($(window).scrollTop() + $(window).height() == $(document).height()) {

		document.getElementById('prebox').scrollIntoView();
    }
	
};

window.addEventListener('deviceproximity', onDeviceProximityChanged);
window.addEventListener('userproximity', onUserProximityChanged);

if ("ondevicelight" in window) {
	  
	window.addEventListener("devicelight", updateLight);
}