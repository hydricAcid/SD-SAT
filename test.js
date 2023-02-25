let images = document.querySelectorAll('div[class*="Avatar__Avatar___gE5kx Avatar__staff___4gVLs MessageList__avatar___2wxyb "]')

for (i = 0; i < images.length; i++) {
    images[i].src = browser.runtime.getURL("images/kitten.jpg")
}

var cssFile = chrome.runtime.getURL("injected.css");
var fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssFile);
document.head.appendChild(fileref);
document.getElementsByTagName("html")[0].appendChild(fileref);