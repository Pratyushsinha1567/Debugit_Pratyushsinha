// Background script (background.js)

let activeTabs = {}; // Store active tabs and their start times

// Listen for tab activation
chrome.tabs.onActivated.addListener(activeInfo => {
    const tabId = activeInfo.tabId;
    activeTabs[tabId] = Date.now(); // Record start time of active tab
});

// Listen for tab deactivation or closure
chrome.tabs.onRemoved.addListener(tabId => {
    const startTime = activeTabs[tabId];
    if (startTime) {
        const endTime = Date.now();
        const elapsedTime = endTime - startTime; // Calculate time spent
        // Here, you can store the data or perform further processing
        delete activeTabs[tabId]; // Remove tab from activeTabs
    }
});

// Optionally, you may want to listen for window focus changes to handle cases where the user switches between windows
