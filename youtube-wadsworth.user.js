// ==UserScript==
// @name           Youtube wadsworth
// @namespace      http://userscripts.org/users/127069
// @description    Displays a wadsworth button to activate it
// @include        http*://*.youtube.com/watch?*v=*
// ==/UserScript==

var wadsworth = document.createElement("button");
wadsworth.innerHTML = "Wadsworth";

var cPage = document.URL;
if (cPage.indexOf("wadsworth") == -1) {
    wadsworth.className = "yt-uix-tooltip-reverse yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty";
    wadsworth.onclick = function () { parent.location = cPage + "&wadsworth=1"; };
} else {
    wadsworth.className = "end yt-uix-tooltip-reverse yt-uix-button-toggled yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty";
    var patt = /(.+)&wadsworth=1/i;
    wadsworth.onclick = function () { parent.location = cPage.match(patt)[1] };
    
}

document.getElementById("watch-actions").appendChild(wadsworth);