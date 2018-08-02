'use strict';

const plblock = document.querySelector('.pooling')

setInterval(function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://neto-api.herokuapp.com/comet/pooling');
    xhr.send();

    xhr.addEventListener('load', () => {
        addClassRandomDiv(plblock, xhr.responseText);
    })
}, 1000);