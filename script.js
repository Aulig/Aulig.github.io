//update text in html to reflect updated proximity data
function onDeviceProximityChanged(event) {
	
	document.getElementById('distanceValue').innerHTML = toThreeDecimals(event.value) + 'range: cm (' + toThreeDecimals(event.min) + '-' + toThreeDecimals(event.max) + ' cm)';
}

//parse number to 3 post comma decimals
function toThreeDecimals(input) {
	
	return Number.parseFloat(input).toPrecision(3);
}

//scroll if proximity sensor obscured
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
			}
			else {
				
				prevY = window.scrollY;
			}
		
		}, y);
	}

	document.getElementById('nearValue').innerHTML = event.near ? 'close' : 'far away';
}

//add event listeners for proximity changes
window.addEventListener('deviceproximity', onDeviceProximityChanged);
window.addEventListener('userproximity', onUserProximityChanged);