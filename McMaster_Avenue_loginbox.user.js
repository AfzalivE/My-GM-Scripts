// ==UserScript==
// @name          McMaster Avenue loginbox
// @description   Display the login box inside Avenue's homepage
// @include       http://avenue.mcmaster.ca/*
// @include	      https://cap.mcmaster.ca/mcauth/macidlogin.jsp?app_id=702&app_name=McMaster%20e-Learning
// @version       1.1.0
// @author        Afzal
// @date          2012-09-08
// ==/UserScript==

var login, loginbox;

if (document.getElementById('nav_links')) {
	login = document.createElement("div");
	login.innerHTML='<iframe width="100%" height="25%" frameborder="0" scrolling="no" src="https://cap.mcmaster.ca/mcauth/macidlogin.jsp?app_id=702&amp;app_name=McMaster%20e-Learning"></iframe>';
	document.getElementById('container').insertBefore(login, document.getElementById("body_wrap"));
}

loginbox = document.getElementsByTagName("form")[0];
loginbox.setAttribute('onsubmit','');
loginbox.setAttribute('target','_parent');
