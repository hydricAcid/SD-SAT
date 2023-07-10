// This script will be injected into the web page
function injectCustomCSS() {
    chrome.storage.sync.get(['background', 'textColor'], function(data) {
      var customCSS = `
        body {
          color: ${data.textColor} !important;
        }
        div.MessageActions__MessageActions___HBFsu, div.Viewer__sidebar___1Btu4, div.ReadingPane__ReadingPane___QEtL8 {
            background-color: ${data.background} !important;
          }
      `;
      var style = document.getElementById('custom-style');
      if (style) {
        style.innerHTML = customCSS;
      } else {
        style = document.createElement('style');
        style.id = 'custom-style';
        style.innerHTML = customCSS;
        document.head.appendChild(style);
      }
    });
  }
  
  // Inject the custom CSS whenever the page loads or when the message is received
  injectCustomCSS();
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'changeColor') {
      injectCustomCSS();
    }
  });
  