const fill = document.getElementById("fill")
fill.addEventListener("click", async () => { 
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: FindMe 
    })

})
function FindMe() {
    document.querySelector('input[name="dimensions.weight"]').value = 31
    document.querySelector('input[name="dimensions.width"]').value = 32
    document.querySelector('input[name="dimensions.length"]').value = 33
    document.querySelector('input[name="dimensions.height"]').value = 34
    const inputEvent = new Event('input', {
        bubbles: true,
    })
    const barCode = document.querySelector('input[name="barcode"]').value
    document.querySelector('input[name="vendorCode"]').value = barCode
    document.querySelector('input[name="vendorCode"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.weight"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.width"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.length"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.height"]').dispatchEvent(inputEvent)

    
}