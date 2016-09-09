# Front End Widgets
2 Widgets built based on a reference PSD file.

---

* First, I built the project directory, installed dependencies and wrote boilerplate to initialize the project.

* I then took the optional step to create a widget_contents.json file to store the widget contents rather than hard code strings and/or use images for the charts (in the stocks widget).

* Then, I created the User Menu widget with layout and style, plus content from the JSON file.

* I created the Stocks widget, with programmatically generated charts from data within the JSON file (as opposed to using images), with the bar charts generated using regular HTML and CSS and the line chart being generated with a custom SVG.

* Then, I used the Adobe CC Extract tool to get the icons from the User Menu widget in the mockup PSD, and placed and styled those images insider the User Menu widget buttons.

* After that, I updated the styles of both widgets to make them responsive and tested across multiple browsers.

* Following that, I added user click interactivity to the User Menu widget - when a button is selected, it background colour and text colour changes, and each button has a custom underline colour.

---

* Considerations regarding accessibility:

1) 1.11 Non-text Content - Level A
> Technique ARIA6: Using aria-label to provide labels for objects

* I added the aria-label attribute with a useful description to charts in stocks widget for clarity with use of screen readers, etc.

2) 1.41 Use of Color - Level A
> Technique C15: Using CSS to change the presentation of a user interface component when it receives focus

* I changed the background colour and text colour of user menu buttons on focus/select.

---

* Then I added comments to clarify various parts of the code, and refactored my components to make more sensible used of the widget_contents JSON file.

* Finally, I cleaned up the fonts in the stocks widget to closer reflect the mockup PSD. 




