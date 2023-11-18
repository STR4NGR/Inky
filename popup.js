const short = document.getElementById("short")
const long = document.getElementById("long")
const df = document.getElementById("df")
const ff = document.getElementById("ff")
const trunk = document.getElementById("trunk")
const shirt = document.getElementById("shirt")
const mysound = new Audio('/audio/sound.mp3')
short.addEventListener("click", async () => { 
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: Short 
    })

})
long.addEventListener("click", async () => { 
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: Long
    })

})
df.addEventListener("click", async () => { 
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: DF
    })

})
ff.addEventListener("click", async () => { 
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: FF
    })

})
trunk.addEventListener("click", async () => { 
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: Trunk
    })

})
shirt.addEventListener("click", async () => { 
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: Shirt
    })

})

function Shirt() {
    document.querySelector('input[name="dimensions.weight"]').value = 0.3  
    document.querySelector('input[name="dimensions.width"]').value = 20
    document.querySelector('input[name="dimensions.height"]').value = 5
    document.querySelector('input[name="dimensions.length"]').value = 30
    const inputEvent = new Event('input', {
        bubbles: true,
    })
    const changeEvent = new Event('change', {
        bubbles: true,
    })
    const vendorCode = document.querySelector('input[name="vendorCode"]').value
    document.querySelector('input[name="groupId"]').value = vendorCode
    document.querySelector('input[name="groupId"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.weight"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.width"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.length"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.height"]').dispatchEvent(inputEvent)

    const web = document.querySelectorAll('.___inner___Rgdkj')[14]
    const inweb = document.querySelectorAll('.___inner___Rgdkj')[15]

    web.querySelector('*:first-child').value = "RU"
    web.querySelector('*:first-child').dispatchEvent(changeEvent)

    const regex = /(\d{1,2}(-\d{1,2})?) размер/g;

    const matches = [];
    let match;
    
    while ((match = regex.exec(document.querySelector('input[name="name"]').value)) !== null) {
      matches.push(match[0].replace(" размер", ""));
    }

    const Num = matches.map(number => number.replace('-', '/'));

    inweb.querySelector('*:first-child').value = Num[0]
    inweb.querySelector('*:first-child').dispatchEvent(changeEvent)
    
}

function Trunk() {
    document.querySelector('input[name="dimensions.weight"]').value = 0.3  
    document.querySelector('input[name="dimensions.width"]').value = 15
    document.querySelector('input[name="dimensions.height"]').value = 5
    document.querySelector('input[name="dimensions.length"]').value = 20
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

    const web = document.querySelectorAll('.___inner___Rgdkj')[14]
    const inweb = document.querySelectorAll('.___inner___Rgdkj')[15]

    web.querySelector('*:first-child').value = "RU"
    web.querySelector('*:first-child').dispatchEvent(inputEvent)

    const regex = /(\d{1,2}(-\d{1,2})?) р-р/g;

    const matches = [];
    let match;
    
    while ((match = regex.exec(document.querySelector('input[name="name"]').value)) !== null) {
      matches.push(match[0].replace(" р-р", ""));
    }

    const Num = matches.map(number => number.replace('-', '/'));

    inweb.querySelector('*:first-child').value = Num[0]
    inweb.querySelector('*:first-child').dispatchEvent(inputEvent)
    
}

function FF() {
    document.querySelector('input[name="dimensions.weight"]').value = 0.6  
    document.querySelector('input[name="dimensions.width"]').value = 30
    document.querySelector('input[name="dimensions.height"]').value = 6
    document.querySelector('input[name="dimensions.length"]').value = 35
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

    const web = document.querySelectorAll('.___inner___Rgdkj')[14]
    const inweb = document.querySelectorAll('.___inner___Rgdkj')[15]

    web.querySelector('*:first-child').value = "RU"
    web.querySelector('*:first-child').dispatchEvent(inputEvent)

    const regex = /(\d{1,2}(-\d{1,2})?) размер/g;

    const matches = [];
    let match;
    
    while ((match = regex.exec(document.querySelector('input[name="name"]').value)) !== null) {
      matches.push(match[0].replace(" размер", ""));
    }

    const Num = matches.map(number => number.replace('-', '/'));

    inweb.querySelector('*:first-child').value = Num[0]
    inweb.querySelector('*:first-child').dispatchEvent(inputEvent)
    
}

function DF() {
    document.querySelector('input[name="dimensions.weight"]').value = 0.5  
    document.querySelector('input[name="dimensions.width"]').value = 30
    document.querySelector('input[name="dimensions.height"]').value = 6
    document.querySelector('input[name="dimensions.length"]').value = 35
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

    const web = document.querySelectorAll('.___inner___Rgdkj')[14]
    const inweb = document.querySelectorAll('.___inner___Rgdkj')[15]

    web.querySelector('*:first-child').value = "RU"
    web.querySelector('*:first-child').dispatchEvent(inputEvent)

    const regex = /(\d{1,2}(-\d{1,2})?) размер/g;

    const matches = [];
    let match;
    
    while ((match = regex.exec(document.querySelector('input[name="name"]').value)) !== null) {
      matches.push(match[0].replace(" размер", ""));
    }

    const Num = matches.map(number => number.replace('-', '/'));

    inweb.querySelector('*:first-child').value = Num[0]
    inweb.querySelector('*:first-child').dispatchEvent(inputEvent)
    
}

function Short() {
    document.querySelector('input[name="dimensions.weight"]').value = 0.3
    document.querySelector('input[name="dimensions.width"]').value = 30
    document.querySelector('input[name="dimensions.length"]').value = 35
    document.querySelector('input[name="dimensions.height"]').value = 6
    const inputEvent = new Event('input', {
        bubbles: true,
    })
    const changeEvent = new Event('change', {
        bubbles: true,
    })
    const vendorCode = document.querySelector('input[name="vendorCode"]').value
    document.querySelector('input[name="groupId"]').value = vendorCode
    document.querySelector('input[name="groupId"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.weight"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.width"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.length"]').dispatchEvent(inputEvent)
    document.querySelector('input[name="dimensions.height"]').dispatchEvent(inputEvent)

    const web = document.querySelectorAll('.___inner___Rgdkj')[14]
    const inweb = document.querySelectorAll('.___inner___Rgdkj')[15]

    web.click()
    web.querySelector('*:first-child').value = "RU"
    web.querySelector('*:first-child').dispatchEvent(changeEvent)
    document.querySelector('[data-label="RU"]').click()
    web.querySelector('*:first-child').setAttribute('aria-selected', 'true')

    const regex = /(\d{1,2}(-\d{1,2})?) размер/g;

    const matches = [];
    let match;
    
    while ((match = regex.exec(document.querySelector('input[name="name"]').value)) !== null) {
        matches.push(match[0].replace(" размер", ""));
    }

    const Num = matches.map(number => number.replace('-', '/'));

    inweb.click()
    inweb.querySelector('*:first-child').value = Num[0]
    inweb.querySelector('*:first-child').dispatchEvent(changeEvent)
    document.querySelector(`[data-label="${Num[0]}"]`).click()
    inweb.querySelector('*:first-child').setAttribute('aria-selected', 'true')
    document.addEventListener('DOMContentLoaded', function () {
        var audio = new Audio()
        audio.src = chrome.runtime.getURL('/audio/sound.mp3')
        audio.play()
    })
}

function Long() {
    document.querySelector('input[name="dimensions.weight"]').value = 0.4
    document.querySelector('input[name="dimensions.width"]').value = 30
    document.querySelector('input[name="dimensions.length"]').value = 35
    document.querySelector('input[name="dimensions.height"]').value = 6
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

    const web = document.querySelectorAll('.___inner___Rgdkj')[14]
    const inweb = document.querySelectorAll('.___inner___Rgdkj')[15]

    web.querySelector('*:first-child').value = "RU"
    web.querySelector('*:first-child').dispatchEvent(inputEvent)

    const regex = /(\d{1,2}(-\d{1,2})?) размер/g;

    const matches = [];
    let match;
    
    while ((match = regex.exec(document.querySelector('input[name="name"]').value)) !== null) {
      matches.push(match[0].replace(" размер", ""));
    }

    const Num = matches.map(number => number.replace('-', '/'));

    inweb.querySelector('*:first-child').value = Num[0]
    inweb.querySelector('*:first-child').dispatchEvent(inputEvent)
    
}