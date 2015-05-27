# LMWeb Finder (v1.3)

##### Introduction
LMWeb Finder is a little library that improves native web browser finder (Crtl + F).<br />With LMWeb Finder you can customize colors from highlighted matches and the area to search for. Also, you can put this finder where you want in your web since it works from a text input and a button.

##### Installation
<b>This library needs <a href="https://jquery.com/" target="_blank">Jquery</a> to use it.</b><br />
```javascript
    <script src="js/libs/jquery/jquery.js" type="text/javascript"></script>
```
To use LMWeb Finder you need to import js file into your html:
```javascript
    <script src="lmwebfinder.js" type="text/javascript"></script> 
```
Also you need to create a little script into your html head in order to create a global variable:
```javascript
<script>
    window.onload = function () { 
        original = document.getElementById('findIn').innerHTML; //original text
    } 
</script>
```
Finally, make an instance of LMWebFinder class anywhere in your page:
```javascript
<script>
	LMWebFinder = new LMWebFinder();
</script>
```
<br />
Second you need to create an element where you can write inside it (input, textarea...) and put an "onkeydown" event with element.value and event parameters to use it with "Enter" key:
```html
<input type="text" id="finder" onkeydown="LMWebFinder.pressKey(this.value, event);">
```
And add an element with "onclick" event to launch the clean script (button, a, span...) in order to clean input and remove the highlights:
```html
<input type="button" value="X" onclick="LMWebFinder.clean(document.getElementById('finder'));"> 
```
Add an element with "onclick" event to launch the script (button, a, span...) taking the value of the input to send to the search function:
```html
<input type="button" value="Find Next" onclick="LMWebFinder.search(document.getElementById('finder').value);"> 
```
Finally you need to put all the content you want to search for inside an element (div, body, html...) with any ID:
```html
<div id="findIn"> 
	/* Content to search for */ 
 	<ul> 
	 	<li>You</li> 
		<li>Can</li> 
		<li>Find</li> 
		<li>In</li> 
		<li>Lists</li> 
	</ul>
    <p>You can search in paragraphs also!</p> 
    Obviusly you can search in plain text
    <style>You cant find inside style, script, meta, title and link tags</style>
 </div>
 ```
 <br />
#####Configuration
As I said before you can customize colors from highlighted matches. You only need to change two variables to make this. Default colors are yellow (#FFFF00) for all matches and red (#FF0000) for focused match. Colors can be set in hexadecimal form or allowed web names for colors.<br />
Change primary color:
```javascript
<script>
	LMWebFinder.primaryColor = "new primary color";
</script>
```
Change secondary color:
```javascript
<script>
	LMWebFinder.secondaryColor = "new secondary color";
</script>
```
Also you can change the element id in case you don't like the default one (findIn) or you have it already in use:
```javascript
<script>
	LMWebFinder.findId = "new ID";
</script>
```
<br /> 
There is an example for you to view how it works.<br /> 
And you can see a live example in this blog: <a href="http://grenderg.github.io/blog/" target="_blank">GrenderG blog</a>.<br />

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">LMWebFinder</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">legomolina</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional License</a>.
