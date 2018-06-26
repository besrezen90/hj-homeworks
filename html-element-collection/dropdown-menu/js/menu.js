'use strict'
let buttonMenu = document.getElementsByClassName("wrapper-dropdown");

function dropdown() {

    if(this.classList.toggle("active")) this.classList.add("active")
    else this.classList.remove("active")
}

for (let button of buttonMenu) {
    button.onclick = dropdown
}