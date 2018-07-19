'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const counter = document.getElementById('counter'),
        buttons = document.querySelectorAll('.wrap-btns button');

    //получаем значение cookie
    function get_cookie(cookie_name) {
        var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

        if (results)
            return (unescape(results[2]));
        else
            return null;
    }

    //создаем cookie
    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    if (!get_cookie('count')) {
        createCookie('count', 0, 356);
    }
    counter.textContent = get_cookie('count');

    function calcCounter(event) {
        let count = new Number(get_cookie('count'));
        if (event.target.getAttribute('id') === 'increment') count++;
            if (event.target.getAttribute('id') === 'decrement') {
                count--;
                if (count < 0) count = 0;
            }
        if (event.target.getAttribute('id') === 'reset') count = 0;

        createCookie('count', count, 356);
        counter.textContent = get_cookie('count');
    }

    Array.from(buttons).forEach(button => button.addEventListener('click', calcCounter));
})