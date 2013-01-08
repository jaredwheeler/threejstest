window.addEventListener('deviceorientation', handleDeviceOrientation, false);

var tiltLR = 0;
var tiltFB = 0;
var dir = 0;


function handleDeviceOrientation(eventData)
{
	// gamma is the left-to-right tilt in degrees, where right is positive
	tiltLR = eventData.gamma;
	
	// beta is the front-to-back tilt in degrees, where front is positive
	tiltFB = eventData.beta;
	
	// alpha is the compass direction the device is facing in degrees
	dir = eventData.alpha;
}