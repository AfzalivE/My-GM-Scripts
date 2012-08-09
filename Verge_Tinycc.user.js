// ==UserScript==
// @name        Verge Tinycc
// @namespace   AfzalivE
// @description Removes comments with tiny.cc links
// @include     http://www.theverge.com/*
// @version     1
// ==/UserScript==

comments = document.getElementsByClassName("cbody");

function onCommentsLoad(event) {
	for (i = 0; i < comments.length; i++) {
    	if (comments[i].innerHTML.indexOf("http://tiny.cc") > 1) {
        	spam = comments[i].parentNode;
        	spam.parentNode.removeChild(spam);
    	}
	}
}

document.getElementById("node_2993826_comments_list").addEventListener("DOMNodeInserted", onCommentsLoad, false);