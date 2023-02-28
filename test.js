
var cssFile = chrome.runtime.getURL("injected.css");
var ref = document.createElement("link");
ref.setAttribute("rel", "stylesheet");
ref.setAttribute("type", "text/css");
ref.setAttribute("href", cssFile);
document.head.appendChild(ref);
document.getElementsByTagName("html")[0].appendChild(ref);


document.getElementsByClassName("li.item.hasChildren").element.setAttribute(onclick, "");
