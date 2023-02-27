
var cssFile = chrome.runtime.getURL("injected.css");
var fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssFile);
document.head.appendChild(fileref);
document.getElementsByTagName("html")[0].appendChild(fileref);

document.getElementsByClassName("li.item.hasChildren").element.setAttribute(onclick, "");


document.querySelectorAll("#menu li.item.hasChildren label").innerHTML = "changed";