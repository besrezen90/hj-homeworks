'use strict';

const longplblock = document.querySelector('.long-pooling')

setInterval(function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://neto-api.herokuapp.com/comet/long-pooling');
    xhr.send();

    xhr.addEventListener('load', () => {
        addClassRandomDiv(longplblock, xhr.responseText);
    })
}, 5000);