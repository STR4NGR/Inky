const fill = document.getElementById("fill")
fill.addEventListener("click", async () => { 
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: FindMe 
    })

})
function FindMe() {
    document.querySelector('input[name="dimensions.weight"]').value = 0.3  
    document.querySelector('input[name="dimensions.width"]').value = 30
    document.querySelector('input[name="dimensions.length"]').value = 35
    document.querySelector('input[name="dimensions.height"]').value = 6
    document.querySelector('input[name="Размерная сетка"]').value = "RU"
    const inputEvent = new Event('input', {
        bubbles: true,
    })
    const vendorCode = document.querySelector('input[name="vendorCode"]').value
    document.querySelector('input[name="groupId"]').value = vendorCode
    document.querySelector('input[name="groupId"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.weight"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.width"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.length"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.height"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="Размерная сетка"]').dispatchEvent(inputEvent)
    
}