'use strict'
let selectItems = document.getElementsByTagName("a"),
    bigImage = document.getElementsByClassName("gallery-view")[0];

function showselectItems(event) {
    event.preventDefault()
    Array.from(selectItems).forEach(item => item.classList.remove("gallery-current"))
    event.currentTarget.classList.add("gallery-current")
    bigImage.src = event.currentTarget.href
}



Array.from(selectItems).forEach(item => item.addEventListener("click", showselectItems))