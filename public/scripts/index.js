var usd = document.getElementById('usd');
var aud = document.getElementById('aud');
var cad = document.getElementById('cad');
var bgn = document.getElementById('bgn');



setTimeout(function () {
    for (let i = 0; i < 60; i++) {
        if (i < 12) {
            ratesUp(i);
        }
        else if (i < 24) {
            ratesDown(i);
        }
        else if (i < 36) {
            ratesUp(i);
        }
        else if (i < 48) {
            ratesDown(i);
        }
        else {
            ratesUp(i);
        }
    }
}, 5000);

function ratesUp(i) {
    setTimeout(function () {
        usd.innerHTML = Number(usd.textContent) + 0.0001;
        aud.innerHTML = Number(aud.textContent) + 0.0001;
        cad.innerHTML = Number(cad.textContent) + 0.0001;
        bgn.innerHTML = (Number(bgn.textContent) + 0.0001).toFixed(4);
        usd.setAttribute("class", "bg-success");
        aud.setAttribute("class", "bg-success");
        cad.setAttribute("class", "bg-success");
        bgn.setAttribute("class", "bg-success");
    }, 5000 * i);
}
function ratesDown(i) {
    setTimeout(function () {
        usd.innerHTML = Number(usd.textContent) - 0.0001;
        aud.innerHTML = Number(aud.textContent) - 0.0001;
        cad.innerHTML = Number(cad.textContent) - 0.0001;
        bgn.innerHTML = (Number(bgn.textContent) - 0.0001).toFixed(4);
        usd.setAttribute("class", "bg-danger");
        aud.setAttribute("class", "bg-danger");
        cad.setAttribute("class", "bg-danger");
        bgn.setAttribute("class", "bg-danger");
    }, 5000 * i);
}
