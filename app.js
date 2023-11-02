function updateContent() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	  // tabs[0] contains the currently active tab
	  document.getElementById('url').textContent = tabs[0].url;
	  document.getElementById('title').textContent = tabs[0].title;
	});
}

chrome.tabs.onUpdated.addListener(updateContent);
chrome.tabs.onActivated.addListener(updateContent);

updateContent();

