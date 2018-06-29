'use strict'
let set = document.getElementsByClassName('set')[0],
    liButton = set.getElementsByTagName("li");

let middleList = [
        "sounds/middle/first.mp3",
        "sounds/middle/second.mp3",
        "sounds/middle/third.mp3",
        "sounds/middle/fourth.mp3",
        "sounds/middle/fifth.mp3"
    ],
    lowerList = [
        "sounds/lower/first.mp3",
        "sounds/lower/second.mp3",
        "sounds/lower/third.mp3",
        "sounds/lower/fourth.mp3",
        "sounds/lower/fifth.mp3"
    ],
    higherList = [
        "sounds/higher/first.mp3",
        "sounds/higher/second.mp3",
        "sounds/higher/third.mp3",
        "sounds/higher/fourth.mp3",
        "sounds/higher/fifth.mp3"
    ];
    
//Сброс в middle
function resetSound(event) {
    if (event.type == "keyup") {
        set.classList.remove("higher")
        set.classList.remove("lower")
        set.classList.add("middle")
    }
}


// Функция проигрывания звука

function playSaund(event) {
    if(event.altKey) {
        set.classList.remove("middle")
        set.classList.remove("lower")
        set.classList.add("higher")
    }
    if(event.shiftKey) {
        set.classList.remove("middle")
        set.classList.remove("higher")
        set.classList.add("lower")
    }
    if (set.classList.contains("middle")) {
        for (let i = 0; i < liButton.length; i++) {
            liButton[i].getElementsByTagName("audio")[0].src = middleList[i]
        }
    }
    if (set.classList.contains("lower")) {
        for (let i = 0; i < liButton.length; i++) {
            liButton[i].getElementsByTagName("audio")[0].src = lowerList[i]
        }
    }
    if (set.classList.contains("higher")) {
        for (let i = 0; i < liButton.length; i++) {
            liButton[i].getElementsByTagName("audio")[0].src = higherList[i]
        }
    }
    event.currentTarget.getElementsByTagName("audio")[0].pause()
    event.currentTarget.getElementsByTagName("audio")[0].currentTime = 0
    event.currentTarget.getElementsByTagName("audio")[0].play()
}


Array.from(liButton).forEach(elem => elem.addEventListener("click", playSaund))
document.addEventListener('keyup', resetSound)