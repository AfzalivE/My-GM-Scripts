// ==UserScript==
// @name           AppBrain
// @namespace      AfzalivE
// @author         AfzalivE
// @description	   Adds an Android Market link
// @version        1.0.0
// @include        http://www.appbrain.com/app/*
// ==/UserScript==

var parent = document.getElementById("appInfo");
var comma_span = document.createElement("span");
comma_span.innerHTML = ", ";
parent.appendChild(comma_span);

var link = document.createElement("a");
var uri = document.URL.split("/")[5];
link.href = "https://market.android.com/details?id="+uri;
link.innerHTML = "Market Link";
parent.appendChild(link);