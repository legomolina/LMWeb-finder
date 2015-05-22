# LMWeb Finder
Web finder like Ctrl+F in modern browsers

This library needs <a href="https://jquery.com/" target="_blank">Jquery</a> to use it.<br />
Attach LMWeb Finder to HTML file with script tag:<br />
``` <script src="js/libs/lmwebfinder.js" type="text/javascript"></script> ```

Also you need to add a short script in the page you want to search: <br />
``` window.onload = function () {	original = document.getElementById('findIn').innerHTML; lastMatch = 0; };```

All content you want to search for must be inside an element with ID: "findId", but you can change this ID from code:<br />
``` findId = "findId"; //The text you want to search in must be inside an element with this id ```

Colors used to highlight matches are yellow for all coincidences and red for focused coincidence, both can be changed.<br />
``` primaryColor = "#FFFF00"; //color for all matches```<br />```secondaryColor = "#FF0000"; //color for focused matched ``` <br />

There is an example for you to view how it works.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">LMWebFinder</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">legomolina</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional License</a>.
