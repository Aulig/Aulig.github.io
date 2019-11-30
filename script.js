
function onDeviceProximityChanged(event) {
	
	document.getElementById('distanceValue').innerHTML = event.value + ' cm (' + event.min + '-' + event.max + ' cm range)';
}

function onUserProximityChanged(event) {

	if (event.near) {
      		
		var x = 0;
		var inc = 1;
		var max = 2000;
		var y = 1; //delay in milliseconds
		var prevY = window.scrollY;

		var id = setInterval(function() {
			
			window.scrollBy(0, inc);
			
			x = x + inc;
			
			if (x > (max / 4) + 1) {

				inc = inc / 1.04;
			}
			else {
				
				inc = inc * 1.08;
			}
			
			if (x >= max) {
				
				clearInterval(id);
				return;
			}
			
			if (inc < 1) {
				
				clearInterval(id);
			}
			
			if (prevY == window.scrollY) {
				
				document.getElementById('prebox').scrollIntoView();
				clearInterval(id);
				return;        
			}
			else {
				
				prevY = window.scrollY;
			}
		
		}, y);
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
		var prevY = window.scrollY;

		var id = setInterval(function() {
			
			window.scrollBy(0, inc);
			
			x = x + inc;
			
			if (x > (max / 4) + 1) {

				inc = inc / 1.04;
			}
			else {
				
				inc = inc * 1.08;
			}
			
			if (x >= max) {
				
				clearInterval(id);
				return;
			}
			
			if (inc < 1) {
				
				clearInterval(id);
			}
			
			if (prevY == window.scrollY) {
				
				document.getElementById('prebox').scrollIntoView();
				clearInterval(id);
				return;        
			}
			else {
				
				prevY = window.scrollY;
			}
		
		}, y);
    }, 
    true);

window.onscroll = function(ev) {
	
};

window.addEventListener('deviceproximity', onDeviceProximityChanged);
window.addEventListener('userproximity', onUserProximityChanged);

if ("ondevicelight" in window) {
	  
	window.addEventListener("devicelight", updateLight);
}