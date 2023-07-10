document.addEventListener('DOMContentLoaded', function() {
    var applyBtn = document.getElementById('apply-btn');
    var backgroundInput = document.getElementById('background-input');
    var textColorInput = document.getElementById('text-color-input');
  
    // Retrieve saved values and set them as defaults
    chrome.storage.sync.get(['background', 'textColor'], function(data) {
      backgroundInput.value = data.background || '#FFFFFF'; // Default to white if not set
      textColorInput.value = data.textColor || '#000000'; // Default to black if not set
    });
  
    applyBtn.addEventListener('click', function() {
      var background = backgroundInput.value;
      var textColor = textColorInput.value;
      chrome.storage.sync.set({ background: background, textColor: textColor }, function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'changeColor' });
        });
      });
    });
  });
  