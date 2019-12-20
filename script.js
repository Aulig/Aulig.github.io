var mode = "rainbow";

var screenHeight = screen.height

var scrollEnabled = true;

var scrollButton = document.getElementById('scrollButton');

//update scrollEnabled and text on button when the button is clicked
scrollButton.addEventListener ('click', function() {

       scrollEnabled = !scrollEnabled;
	   
	   if (scrollEnabled) {
		   
		   	scrollButton.innerHTML = 'Disable scrolling';
			scrollButton.style.background = '#008b00';
	   }
	   else {
		   
		   	scrollButton.innerHTML = 'Enable scrolling';
			scrollButton.style.background = '#8b0000';
	   }
	   
    }, true);

function switchContent(newContentName) {
	
	document.getElementById("rainbowbox").style.visibility = "hidden";
	document.getElementById("recipebox").style.visibility = "hidden";

	
	switch (newContentName) {
		
		case "rainbow":
			document.getElementById("rainbowbox").style.visibility = "visible";

			break;
			
		case "recipe":
		
			document.getElementById("recipebox").style.visibility = "visible";
			break;
	}
}

//update text in html to reflect updated proximity data
function onDeviceProximityChanged(event) {
	
	document.getElementById('distanceValue').innerHTML = toThreeDecimals(event.value) + ' cm (range: ' + toThreeDecimals(event.min) + '-' + toThreeDecimals(event.max) + ' cm)';
}

//parse number to 3 post comma decimals
function toThreeDecimals(input) {
	
	return Number.parseFloat(input).toPrecision(3);
}

//scroll if proximity sensor obscured and scrollEnabled == true
function onUserProximityChanged(event) {

	if (event.near && scrollEnabled) {
      		
		var x = 0;
		var inc = 1;
		var max = screenHeight; //max amount to scroll
		var y = 1; //delay in milliseconds
		var prevY = window.scrollY;

		var id = setInterval(function() {
			
			window.scrollBy(0, inc);
			
			x = x + inc;
			
			if (x > (max / 2) + 1) {

				inc = inc / 1.07;
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
			
			if (prevY == window.scrollY && mode == "rainbow") {
				
				//scroll back to top, only in rainbow mode
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