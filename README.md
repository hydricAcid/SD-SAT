# Software Development SAT

hello here is the start of the file

<h2>Criteria 1 - In the 'Projects' tab, there is a timeline for the SAT.</h2>
There are different views for this too. Just click on the tabs above.

to add: criteria 6 - 10
<h2>Criteria 2 - satFiles/DevelopmentModel.md</h2>
The agile development model is my chosen model for this project 

<h2>Criteria 3 - https://docs.google.com/document/d/1yLfXTU3eeGeTIrsOqJrD5RhuE5QdAOwQSd8AysQhqqY/edit</h2>
This extension is run entirely on a user's computer. No server is required for the extension to function, therefore there won't be any communication for external entities.

<b>UPDATE: improved data flow diagram</b>

<h2>Criteria 4 - https://docs.google.com/document/d/15byJ50CPgZdv5Pmc66C2qtvjOuO-s7fbfQDYwMYii-I/edit#</h2>

My software will be a browser extension that allows the modification of HTML elements on the SEQTA webpage of CRCS. Modifications may include changing colours and sizes and contents of HTML elements on the webpage. Users can change the colours and sizes of HTML elements and they may even be able to upload custom images to be displayed on the webpage. The purpose of the extension is to allow users to personalise their webpage to their liking. This extension will be written in HTML, CSS and JavaScript since modern browsers support those languages by default in terms of writing extensions. This extension will only work for the SEQTA website on PCs, not mobile devices, and a Chromium or Firefox web browser which supports extensions. 

The foundation of this extension is a CSS file injection via JavaScript. When a website is loaded into your browser, a CSS file is also loaded which contains values that define, colours, fonts, sizes and other values. When an external CSS file is injected, the values of the original CSS file can be overwritten by the new values in the injected CSS file, therefore changing the appearance of HTML elements.

There isn’t much difference between the two user classes in terms of having access to the program, as I am planning this application to be open-source. This means that the user will have access to all the code for the software, even make their own modifications to it as they please, just like the developer. The main difference is that the average user may not have as much technical knowledge as the developer, and only those who have that may edit the code for their own purposes.

<h2>Criteria 5 - https://docs.google.com/document/d/19PNzjiQaiL6SlASLnU6TKY6c9lAYMLYy9-a2ACzD0CQ/edit#</h2>

Designs for the application.

<h2>Criteria 6 - manifest.json, popup.js, popup.html, content.js, custom.css</h2>

These five files make up most of the browser extension.
<ul>
  <li>manifest.json: this file is responsible for loading the extension. It is the first file that the browser reads when the extension is loaded.</li>
  <li>popup.html: this HTML document determines the appearance of the popup that appears when a user clicks on the extension icon</li>
  <li>popup.js: The JavaScript that is run alongside popup.html. It provides scripts for when users click on buttons in the extension</li>
  <li>content.js: This JavaScript file is responsible for accessing the Web Storage API in the browser to load values. Depending on whether the user is using the extension for the first time, this .js file will either load defaults or read off the Web Storage API to access the values from the previous session. The file is also responsible for saving values to the Web Storage APO so they can be accessed later</li>
  <li>custom.css: The CSS file which overwrites the current CSS file of the web page. This is used in conjuction with content.js to change the HTML attributes of elements in the web page</li>
</ul>
