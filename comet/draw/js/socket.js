'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');



ws.addEventListener('open', () => {
    console.log('Соединение открыто');
})

window.editor.addEventListener('update', event => {
    event.canvas.toBlob(function(blob){
        ws.send(blob);
    })
})