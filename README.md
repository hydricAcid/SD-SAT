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
  <li>content.js: This JavaScript file is responsible for accessing the Web Storage API in the browser to load values. Depending on whether the user is using the extension for the first time, this .js file will either load defaults or read off the Web Storage API to access the values from the previous session. The file is also responsible for saving values to the Web Storage API so they can be accessed later</li>
  <li>custom.css: The CSS file which overwrites the current CSS file of the web page. This is used in conjuction with content.js to change the HTML attributes of elements in the web page</li>
</ul>

<h2>Criteria 7 - https://docs.google.com/document/d/1BNH7h4IjLGA9OVYAe0aRG_C6qdE2_-M8RyHzkohFcxc/edit</h2>

File management stuff.

<h2>Criteria 8 - https://docs.google.com/document/d/1Wej0_4Ey_Pfp0-KumI6si_uIiQmEdPDC8avmkFeGCX4/edit</h2>

Usability testing.

<h2>Criteria 9 - Evaluation</h2>

The aim of this project was to create a web extension that changed the attributes of HTML elements on a webpage. I believe the extension that I have made fulfills this role, as the extension is successfully able to change the look of the web page by editing the html and css. In order to evaluate this project, I could run some theoretical scenarios where a user would need to use the extension. For example, a user may want to change some colours on the webpage. I would have a user test the extension to see if they can choose the colours they want. They would also test if they changes they make will stay after the page reloads. 

Here is the evaluation of the web extension based on the evaluation criteria:

<ol>
  <li>Usability - the web extension is pretty straightforward and easy to use, utilising a simple [NAME = VALUE] interface where the user can edit the VALUE to change aspects of the webpage.</li>
  <li>Flexibility - There are multiple ways for a user to select colours for the webpage. The extension provides multiple colour selectors for users to pick the colours. For example, a user can pick from a list of predetermined colours, click and drag to a desesired colour with their cursor or input a hex code directly. Depending on the web browser, a user's previously selected colours will also be saved.</li>
  <li>Space - The space around elements in the extension popup is fairly balanced, allowing a user to quickly and easily interact with the settings they want in the popup.</li>
</ol>

Evaluation of Development Model: I decided to use the agile model as my development model for this project. I believe that this was the best model for making this project as it allowed me to produce multiple versions and gain (theoretical) feedback from each version produced. Because I am also using github, the use of the agile model is also made easier due to version control features that git offers. I am able to easily see the changes made in my files over time.

<h2>Criteria 10 - Assessing Project Plan</h2>

I would say that the most adjusted part of the project plan was criteria 6, as the actual making of the extension took a while. This is probably because I had to code two different projects at once for two different assessments, one of them being my Data Analytics project. My Data project actually required much more work to make in terms of length, coding and debugging than my software project, therefore I ended up spending more time on that project rather than this project. I wish that instead of making two seperate projects, I should have had my data project as my software project too, as the data project is mostly coding as well. But when I realised that I would have to code a lot for data, it was already too late as I had already done lots of work for my current software project at the time.

Regarding the effectiveness of the project plan, I believe that it was effective in the beginning of the project, but lost it's effectiveness later on. Maybe if I had worked on one project for both data and software, I would have better time management. But because I had to work on two different projects at the same time, I decided to prioritise my data project over the software project, which impacted the project plan of the software project.
