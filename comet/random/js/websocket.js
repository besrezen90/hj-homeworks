'use strict';


function addClassRandomDiv(block, number) {

    const textFolders = block.querySelectorAll('div');
    textFolders.forEach(elem => {
        elem.classList.remove('flip-it');
        if (elem.textContent === number.trim()) {
            elem.classList.add('flip-it');
        }
    })
}

const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket'),
    wbs = document.querySelector('.websocket');

ws.addEventListener('message', event => {
    addClassRandomDiv(wbs, event.data);
})