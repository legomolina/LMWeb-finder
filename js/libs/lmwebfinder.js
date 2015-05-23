/* 
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.
 */

/*
 * *******************************************************
 *              NEEDS JQUERY TO WORK!!!
 * *******************************************************
 */

/*
 * CONFIGURARTION
 */

primaryColor = "#FFFF00"; //color for all matches
secondaryColor = "#FF0000"; //color for focused matched
findId = "findIn"; //The text you want to search in must be inside an element with this id

/*
 * END CONFIGURATION
 */

lastMatch = 0; //initialize lastMatch as global var
running = false; //initizlize running as global var

function pressKey(textToFind, e) {
    var evt = e ? e : event;
    var key = window.Event ? evt.which : evt.keyCode; //return key code from pressed key
    
    if (key === 13) { //"enter" key
	search(textToFind);
    }
}

function search(textToFind) {

    reset(); //return to original text without colors

    if (!textToFind.length) //if string to find is empty return false
	return;

    var info3;
    var pattern = new RegExp(textToFind + '(?!\}\})', 'gim');
    var space = /^\s$/;
    var searhIn = document.getElementById(findId).getElementsByTagName('*');
    var matches = 0;

    for (var i = 0; i < searhIn.length; i++) { //loop for all nodes in list
	if (searhIn[i].hasChildNodes && searhIn[i].nodeName.toLowerCase() !== 'title' && searhIn[i].nodeName.toLowerCase() !== 'script' && searhIn[i].nodeName.toLowerCase() !== 'meta' && searhIn[i].nodeName.toLowerCase() !== 'link' && searhIn[i].nodeName.toLowerCase() !== 'style') { //if nodes are different from these

	    var searchInChilds = searhIn[i].childNodes;

	    for (var j in searchInChilds) {
		if (searchInChilds[j].nodeType === 3 && !space.test(searchInChilds[j].nodeValue)) { //if node is a text node (nodeType 3) and there is not a space
		    pattern.lastIndex = 0;

		    while (pattern.exec(searchInChilds[j].nodeValue) !== null) {
			matches++;
		    }

		    if (info3 = pattern.exec(searchInChilds[j].nodeValue)) { //if search string exists in the nodeText
			searchInChilds[j].nodeValue = searchInChilds[j].nodeValue.replace(pattern, '{{' + searchInChilds[j].nodeValue.substr(info3['index'], textToFind.length) + '}}'); //adds a {{ and }} to close the match
		    }
		}
	    }

	}
    }
    document.getElementById('findIn').innerHTML = document.getElementById(findId).innerHTML.split('}}').join('</span>').split('{{').join('<span class="goFind" style="background-color: ' + primaryColor + '">'); //replace {{ and }} with span tag with a background color to mark matches

    if (matches === 0) { //if there are not any coincidence return false to prevent movement
	return;
    }

    if (lastMatch >= matches) { //if lastMatch is equal or avobe from matches, lastMatch return to start
	lastMatch = 0;
    }

    var position = document.getElementsByClassName("goFind")[lastMatch].offsetTop; //it captures pixels between top of the page and the showing match
    document.getElementsByClassName("goFind")[lastMatch].style.backgroundColor = secondaryColor; //changes the color of the actual match in order to diffenciate from others
    
    if(!running) { //this disables animation if it's running other one
	running = true
	$('body, html').animate({//animates body to go to match position
	    scrollTop: position - 50 + 'px'
	}, 600, function() {running = false;});
    }
    else { //if there is an animation running move body to position without animation
	document.body.style.top = position - 50 + 'px';
    }

    lastMatch++; //increments lastMatch for the next time we click in find button
}

function reset() {
    document.getElementById(findId).innerHTML = original; //return the text to original version
}

function clean(searchInput) {
    searchInput.value = ""; //clears search input
    reset(); //return the text to original verion
}