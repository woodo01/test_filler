function injectedFunction() {
    document.body.style.color = "orange";
    console.log(123);
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target : {tabId : tab.id},
        func : injectedFunction,
    });
});

chrome.runtime.onInstalled.addListener(() => {
    console.log("One-Click Background Changer Extension Installed!");
});