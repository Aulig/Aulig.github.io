
function onDeviceProximityChanged(event) {
	
	document.getElementById('distanceValue').innerHTML = event.value + ' cm (' + event.min + '-' + event.max + ' cm range)';
}

function onUserProximityChanged(event) {

	if (event.near) {

		var x = 0;
		var inc = 1;
		var max = 2000;
		var y = 1; //delay in milliseconds

		var id = setInterval(function() {
			
			window.scrollBy(0, inc);
			
			x = x + inc;
			
			if (x > (max / 4) + 1) {

				inc = inc / 1.04;
			}
			else {
				
				inc = inc * 1.07;
			}
			
			if (x >= max) {
				
				clearInterval(id);
			}
		}, y);
		
		if($(window).scrollTop() + $(window).height() == $(document).height()) {

			document.getElementById('prebox').scrollIntoView();
		}
	}

	document.getElementById('nearValue').innerHTML = event.near ? 'near' : 'far away';
}

function updateLight(event) {
	
	document.getElementById("lightValue").innerHTML = event.value + " lux";
}

document.getElementById("testbutton").addEventListener ('click',
    function() { 
      		
		var x = 0;
		var inc = 1;
		var max = 2000;
		var y = 1; //delay in milliseconds

		var id = setInterval(function() {
			
			window.scrollBy(0, inc);
			
			x = x + inc;
			
			if (x > (max / 4) + 1) {

				inc = inc / 1.04;
			}
			else {
				
				inc = inc * 1.07;
			}
			
			if (x >= max) {
				
				clearInterval(id);
			}
		}, y);
		
		if($(window).scrollTop() + $(window).height() == $(document).height()) {

			document.getElementById('prebox').scrollIntoView();
		}
    }, 
    true);

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