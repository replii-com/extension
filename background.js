const INSTALL_LINK = "https://lukew3.com";

// Open SidePanel on icon click
if (chrome.sidePanel) {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
} else {
  chrome.action.onClicked.addListener(() => {
    chrome.notifications.create({
      type: "basic",
      title: "Unsupported",
      iconUrl: chrome.runtime.getURL("icon.png"),
      message: "Please upgrade your Chrome browser to version 114+",
    });
  });
}

// Set url to visit on install
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    chrome.tabs.create({ url: INSTALL_LINK });
  }
});
