"use strict"


var hrefs = [
    "i/airmax-jump.png",
    "i/airmax-on-foot.png",
    "i/airmax-playground.png",
    "i/airmax-top-view.png",
    "i/airmax.png"
]
document.getElementById("slider").src = hrefs[0];
let i = 1;
let slider = setInterval(function () {
    document.getElementById("slider").src = hrefs[i];
    i++
    if (i === 5) i = 0;
}, 5000);
