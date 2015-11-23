
function createOverlay(x, sendResponse) {
	
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var x = sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension" ;
      createOverlay(x, sendResponse);
      //sendResponse({farewell: x});
});


