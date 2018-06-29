'use strict'

let drums = document.getElementsByClassName("drum-kit__drum")

function drumPlayAudio() {
    this.getElementsByTagName("audio")[0].pause()
    this.getElementsByTagName("audio")[0].currentTime = 0
    this.getElementsByTagName("audio")[0].play()
}

for (let drum of drums) {
    drum.onclick = drumPlayAudio
}

