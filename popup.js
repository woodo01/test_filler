document.getElementById("scan").addEventListener("click", () => {
    // alert(__NEXT_DATA__.props.pageProps.task.publicAttributes.questions.map(({index, value}) => ({index, value})));
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: changeBackgroundColor,
        });
    });
});

function changeBackgroundColor() {
    document.body.style.color = "lightblue";
}