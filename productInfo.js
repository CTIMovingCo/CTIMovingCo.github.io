// totoV application version
var totoV = "0.7.0"
// Copyright 2019 lawrence Edinger


function addTodo() {
    var x = document.createElement("span")
    x.setAttribute("")
}


function VersionNumberInfo() {
    document.getElementById("VerInfo").innerHTML = `
        Product Versions
        Toto <span id="toto-version"></span>
        Chromium <span id="chrome-version"></span>
        Created By Lawrence Edinger in association with CTI Moving Co.
        Copyright 2020 CTI Moving Co.
    `
    document.getElementById("VerInfo").setAttribute("class", "alert")
    function getChromeVersion () {     
        var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return raw ? parseInt(raw[2], 10) : false;
    }
    document.getElementById("toto-version").innerHTML = totoV
    document.getElementById("chrome-version").innerHTML = getChromeVersion()
}