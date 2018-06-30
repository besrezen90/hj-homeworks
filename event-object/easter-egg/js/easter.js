'use strict'
let nav = document.getElementsByTagName("nav")[0],
    secretblock = document.getElementsByClassName("secret")[0],
    secretCode = [],
    counter = 0;



function openMenu(event) {
  if(!event.ctrlKey) {
    return
  }
  if(!event.altKey) {
    return
  }
  if (!event.repeat && event.code == 'KeyT') {
    nav.classList.toggle("visible")
  }
}

function openSecretBlock(event) {
  let referencecod = [
    "KeyY",
    "KeyT",
    "KeyN",
    "KeyJ",
    "KeyK",
    "KeyJ",
    "KeyU",
    "KeyB",
    "KeyZ"  
  ];
    secretCode.push(event.code)
    if(secretCode[counter] === referencecod[counter]) {
      counter++
      if (counter === referencecod.length) {
        secretblock.classList.toggle("visible")
        counter = 0
        secretCode = []
        // if(secretblock.classList.contains("visible")) {
        //    setInterval(function () {
        //       secretblock.classList.remove("visible")
        //   }, 10000)
        // }
      }
    }
    else {
      counter = 0
      secretCode = []
    }
  }


document.addEventListener("keydown", openMenu)
document.addEventListener("keydown", openSecretBlock)