
function createIFrame(xPos, yPos, selectedText) {
	var dialogDiv = document.createElement('div');
	dialogDiv.id = "dialog";
	dialogDiv.style.cssText = "position: absolute; top:" + y + "px; left: " + x "px;";
	console.log(dialogDiv);
	var x = chrome.runtime.getURL('choose.html');
	document.body.appendChild(dialogDiv);
	$('#dialog').load(x);
	$('#edit').html(selectedText);
}


document.addEventListener('mouseup', function getSelectedText(evt) {
	var selectedText = window.getSelection().toString();
	var xPos = evt.clientX;
	var yPos = evt.clientY;
	console.log(selectedText);
	createIFrame(xPos, yPos, selectedText);	
});


