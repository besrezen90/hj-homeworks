'use strict';
document.addEventListener('DOMContentLoaded', function () {

    const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');

    connection.addEventListener('message', event => {
        let info = JSON.parse(event.data);
        document.querySelector('.counter').textContent = info.connections;
        document.querySelector('output.errors').textContent = info.errors;
    });
    connection.addEventListener('close', event => {
        connection.close(1000, 'Работа закончена');
    });
})