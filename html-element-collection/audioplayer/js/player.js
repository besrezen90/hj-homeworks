'use strict'

let audio = document.getElementsByTagName("audio"),
    buttons = document.getElementsByTagName("button"),
    mediaPlayer = document.getElementsByClassName("mediaplayer"),
    audioTitle = document.getElementsByClassName("title");

let playList = [{
        title: "LA Chill Tour",
        src: "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3"
    },
    {
        title: "This is it band",
        src: "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3"
    }, {
        title: "LA Fusion Jam",
        src: "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3"
    }
]


let i = 0

function nextSong() {
    if (i < playList.length - 1) i++
        else i = 0
    audioTitle[0].title = playList[i].title
    audio[0].src = playList[i].src
}

function backSong() {
    if (i > 0) i--
        else i = playList.length - 1
    audioTitle[0].title = playList[i].title
    audio[0].src = playList[i].src
}

function playAudio() {
    switch (this.classList.value) {
        case "back":
            backSong()
            mediaPlayer[0].classList.contains("play") ? audio[0].play() : audio[0].pause()
            break
        case "playstate":
            mediaPlayer[0].classList.toggle("play") ? audio[0].play() : audio[0].pause()
            break
        case "stop":
            mediaPlayer[0].classList.remove("play")
            audio[0].pause()
            audio[0].currentTime = 0
            break
        case "next":
            nextSong()
            mediaPlayer[0].classList.contains("play") ? audio[0].play() : audio[0].pause()
            break
    }
}

for (let button of buttons) {
    button.onclick = playAudio
}