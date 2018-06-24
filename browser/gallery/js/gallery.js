"use strict"

let prevPhoto = document.getElementById("prevPhoto"),
    nextPhoto = document.getElementById("nextPhoto"),
    image = document.getElementById("currentPhoto");

let images = [
    "i/breuer-building.jpg",
    "i/guggenheim-museum.jpg",
    "i/headquarters.jpg",
    "i/IAC.jpg",
    "i/new-museum.jpg",
]


let i = 0;
image.src = images[i]
nextPhoto.onclick = function () {
    i++
    if(i === images.length) i = 0;
    image.src = images[i]
    
}
prevPhoto.onclick = function () {
    i--
    if(i < 0) i = 4;
    image.src = images[i]
    
}