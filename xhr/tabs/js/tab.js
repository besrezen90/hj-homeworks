'use strict'
let tabs = document.querySelectorAll("nav a"),
    content = document.getElementById("content"),
    preloader = document.getElementById("preloader");

function showBlock(event) {
    event.preventDefault()
    Array.from(tabs).forEach(elem => elem.classList.remove("active"))
    event.currentTarget.classList.add("active")
    let xhr = new XMLHttpRequest()

    xhr.addEventListener("loadstart", start)
    xhr.addEventListener("load", onLoad)
    xhr.addEventListener("loadend", end)

    xhr.open("GET",
        event.currentTarget.href)
    xhr.send()

    function start() {
        preloader.classList.remove("hidden")
    }

    function onLoad() {
        content.innerHTML = `${xhr.responseText}`
    }

    function end() {
        preloader.classList.add("hidden")
    }


}



Array.from(tabs).forEach(elem => elem.addEventListener('click', showBlock))
document.addEventListener('DOMContentLoaded', tabs[0].click());