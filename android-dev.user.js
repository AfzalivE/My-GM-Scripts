// ==UserScript==
// @name          Android Market Developer
// @description	  Adds some links helpful to developers in the Android Market
// @include       https://play.google.com/*
// @version       4.2
// @author        Afzal Najam
// @changelog     Fixed after the Developer Console team update
// ==/UserScript==

dropdown = document.getElementById('gbom');
if (dropdown) {
        listitem = document.createElement('li');
        listitem.className = 'gbe gbmtc';
        devlink = document.createElement('a');
        devlink.className = 'gbmt';
        devlink.setAttribute('href','https://play.google.com/apps/publish/Home');
        devlink.setAttribute('target','_blank');
        devlink.innerHTML = 'My Developer Console';

        listitem.appendChild(devlink);
        dropdown.appendChild(listitem);
}

var patt = /^https:\/\/play.google.com\/apps\/publish\/Home\?dev_acc=\d+[#]*$/i;
if (patt.test(document.location.href)) {
    var _timer = setInterval(isPageReady, 500); 
}

function isPageReady() {
    if (document.getElementById('la-loadingBox').style.display == 'none') {
        function getElementsById(id) {
           var a = document.getElementsByTagName("a");
           var arr = new Array();

           for (var i=0; i < a.length; i++) {
              if (a[i].id == id) {
                 arr[arr.length] = a[i];
              }
           }
           return arr;
        }
        srclinks = getElementsById('gwt-debug-statsLink');
        for (i = 0; i < srclinks.length; i++) {
            clearInterval(_timer);
            var statlink = srclinks[i].href;
            var patt = /StatsPlace.p=(.+)/i;
            var pkg = statlink.match(patt)[1];
            var link = "https://play.google.com/store/apps/details?id=" + pkg;
            var a = document.createElement("a");
            a.href = link;
            a.innerHTML = "Market Link";
            tr = document.createElement("tr");
            listdiv = document.getElementById('gwt-debug-applistingappList');
            targettd = listdiv.childNodes[i].getElementsByTagName("div")[0].getElementsByTagName("table")[0].firstChild;
            listdiv.childNodes[i].getElementsByTagName("div")[0].getElementsByTagName("table")[0].firstChild;
            tr.appendChild(a);
            targettd.appendChild(tr);
        }
        return;
    }
}
