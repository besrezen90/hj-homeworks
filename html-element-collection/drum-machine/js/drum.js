'use strict'

let drums = document.getElementsByClassName("drum-kit__drum")

function drumPlayAudio() {
    switch(this.classList.value) {
        case "drum-kit__drum key-clap":
        this.getElementsByTagName("audio")[0].play()
        break
        case "drum-kit__drum key-hihat":
        this.getElementsByTagName("audio")[0].play()
        break
        case "drum-kit__drum key-kick":
        this.getElementsByTagName("audio")[0].play()
        break
        case "drum-kit__drum key-openhat":
        this.getElementsByTagName("audio")[0].play()
        break
        case "drum-kit__drum key-boom":
        this.getElementsByTagName("audio")[0].play()
        break
        case "drum-kit__drum key-ride":
        this.getElementsByTagName("audio")[0].play()
        break    
    }
}

for (var drum of drums) {
    drum.onclick = drumPlayAudio
}

