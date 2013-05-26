// ==UserScript==
// @name          DroidFanz
// @description	  Skip DroidFans wait time
// @include       http://droidfanz.com/*
// @version       1.5
// @author        eViLrAcer (AfzalNaj)
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js
// ==/UserScript==

dlink = $('a[title="Download This File"]')
url = dlink.attr('href');
regex = "download-(.+)";
file = url.match(regex)[1];
filelink = "http://droidfanz.com/download/"+file;

tre = $('.baseinfo.radial');
linkr = document.createElement('span');
linkr.innerHTML = '<a style = "color:#FF0000" href="'+ filelink +'"> Download link</a>';

jlink = $(linkr);
jlink.attr('style','margin-top: 1px; margin-right: 2px;float:right');
jlink.attr('class','baseinfo radial');
jlink.insertAfter(tre);