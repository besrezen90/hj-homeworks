'use strict'
let buttonMenu = document.getElementsByClassName("wrapper-dropdown");

function dropdown() {
    this.classList.toggle("active")
}

for (let button of buttonMenu) {
    button.onclick = dropdown
}