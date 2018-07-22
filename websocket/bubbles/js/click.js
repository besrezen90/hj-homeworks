'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');
    connection.addEventListener('open', function () {
        showBubbles(connection);
    });

    window.addEventListener('click', showClick);

    function showClick(event) {
        connection.send(JSON.stringify({
            x: `${event.x}`,
            y: `${event.y}`
        }));
    };

});