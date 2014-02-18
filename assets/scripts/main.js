var active = false;

function toggleActive() {
	if( active ) {
		active = false;
		chrome.browserAction.setIcon({path : 'assets/images/icon_off.png'});
	} else {
		active = true;
		chrome.browserAction.setIcon({path : 'assets/images/icon_on.png'});
	}
}

function offActive() {
	active = false;
	chrome.browserAction.setIcon({path : 'assets/images/icon_off.png'});
}

chrome.browserAction.onClicked.addListener(toggleActive);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({active: active});
  });

chrome.windows.onRemoved.addListener(offActive);