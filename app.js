const REPLII_BASE = 'http://localhost:3000/sidebar';

function updateContent() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	  // tabs[0] contains the currently active tab
	  const url = tabs[0].url;
	  document.getElementById('url').textContent = url;
	  document.getElementById('title').textContent = tabs[0].title;
	  document.getElementById('repliiFrame').src = REPLII_BASE + '?url=' + encodeURIComponent(url);
	});
}

chrome.tabs.onUpdated.addListener(updateContent);
chrome.tabs.onActivated.addListener(updateContent);

updateContent();

