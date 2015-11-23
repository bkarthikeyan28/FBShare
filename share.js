
document.addEventListener('mouseup', function getSelectedText(evt) {
	var x = window.getSelection().toString();
	var xPos = evt.clientX;
	var yPos = evt.clientY;
	if(x.length) {
		chrome.runtime.sendMessage(x, function(response) {
			console.log("Sent Message " + xPos + " " + yPos + " Received: " + response.farewell);
		});
	}
});