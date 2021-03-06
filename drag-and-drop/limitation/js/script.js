'use strict'

const textarea = document.querySelector('.textarea');


function textareaFocusIn() {
    document.querySelector('.block').classList.add('active')
}

function textareaFocusOut(event) {
    document.querySelector('.block').classList.remove('active')
    if(document.querySelector('.message').classList.contains('view')) document.querySelector('.message').classList.remove('view')
    return event
}

function debounce(callback, delay) {
    let timeout;
    return () => {
        textareaFocusIn()
        document.querySelector('.message').classList.remove('view')
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if(document.querySelector('.block').classList.contains('active')) document.querySelector('.message').classList.add('view')
            timeout = null;
            callback();
        }, delay);
    };
};


textarea.addEventListener('focus', textareaFocusIn)
textarea.addEventListener('focusout', textareaFocusOut)

textarea.addEventListener('input', debounce(() => {
    document.querySelector('.block').classList.remove('active');
}, 2000));