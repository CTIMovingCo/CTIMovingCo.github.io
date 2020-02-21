function convert() {
    var x = document.getElementById("px").value;
    var z = document.getElementById("em").value;
    var y = document.getElementById("defaultPX").value;
    var res = document.getElementById("errorP");


    if (x) {
        res.innerHTML = x / y + "em";
    } else {
        res.innerHTML = z * y + "px";
    }

    if (isNaN(x) || isNaN(z) || isNaN(y)) {
        res.innerHTML = "Please Enter a valid number.";
        res.style.color = "red";
    } else {
        res.style.color = "black";
    }
}

function pxFocus() {
    document.getElementById("em").disabled = true;
    document.getElementById("em").value = "";
}

function emFocus() {
    document.getElementById("px").disabled = true;
    document.getElementById("px").value = "";
}

function pxBlur() {
    document.getElementById("em").disabled = false;
    document.getElementById("em").value = "";
}


function emBlur() {
    document.getElementById("px").disabled = false;
    document.getElementById("px").value = "";
}