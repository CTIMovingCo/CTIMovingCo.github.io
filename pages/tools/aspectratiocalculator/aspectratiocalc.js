function formatImage() {
    var image = document.getElementById("stretchTag")
    var h = document.getElementById("h").value
    var w = document.getElementById("w").value
    var Multiplier = document.getElementById("Multiplier").value
    var hDHeight = document.getElementById("dHeight").value
    var hDWidth = document.getElementById("dWidth").value
    var dMultiplier = 1
    var dWidth = 0
    var dHeight = 0

    function gcdOfRatio() {
        var h = document.getElementById("h").value
        var w = document.getElementById("w").value
        h = Math.abs(h);
        w = Math.abs(w);
        while (w) {
            var t = w;
            w = h % w;
            h = t;
        }
        return h;
    }

    var cGCD = gcdOfRatio()
    var hGCD = h / cGCD
    var wGCD = w / cGCD
    if (document.getElementById("dHeight").value = "null") {
        console.log(hDHeight)
        console.log("Height String True")
    } else if (document.getElementById("dHeight").value = null) {
        console.log(hDHeight)
        console.log("Height Type True")
    } else {
        console.log(document.getElementById("dHeight").value)
        console.log("Height False")
    }
    if (hDWidth = "null") {
        console.log(hDWidth)
        console.log("Width String True")
    } else if (hDWidth = null) {
        console.log(hDWidth)
        console.log("Width Type True")
    } else {
        console.log(hDWidth)
        console.log("Width False")
    }
    console.log(hDWidth)
    console.log("----")
    if (hDHeight = "null") {
        dMultiplier = hDWidth / w
        dHeight = h * dMultiplier
        dWidth = hDWidth
    } else {
        dMultiplier = hDHeight / h
        dWidth = w * dMultiplier
        dHeight = hDHeight
    }

    var cHeight = h * Multiplier
    var cWidth = w * Multiplier

    document.getElementById("errorP").setAttribute("class", "notif")
    document.getElementById("errorP").innerHTML = "The Ratio of your entry is: " + wGCD + ":" + hGCD + "<br />" + "The multiplied resolution is: " + cWidth + " x " + cHeight + "<br />" + "The desiered resolution is: " + dWidth + " x " + dHeight
    document.getElementById("stretchTag").style.width = wGCD * 25 + "px"
    document.getElementById("stretchTag").style.height = hGCD * 25 + "px"
}