'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const formLog = document.querySelector('.sign-in-htm'),
        formSign = document.querySelector('.sign-up-htm'),
        buttons = document.querySelectorAll('.button');

    function loadForm(event) {
        event.preventDefault()

        const formData = new FormData(event.target), //По какой то причине при использовании объекта formData прилетает ошибка "Не все поля заполнены"
            newObjectData = {};
        for (const [k, v] of formData) {
            newObjectData[k] = v;
          }

        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', onLoad)
        if (event.target.getAttribute('class') === "sign-in-htm") {
            xhr.open('POST', 'https://neto-api.herokuapp.com/signin');
        }
        if (event.target.getAttribute('class') === "sign-up-htm") {
            xhr.open('POST', 'https://neto-api.herokuapp.com/signup');
        }

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(newObjectData));

        function onLoad() {
            let serverRequest = JSON.parse(xhr.responseText);
            if (serverRequest.error) {
                event.target.querySelector('.error-message').textContent = serverRequest.message;
                return;
            }
            if(event.target.getAttribute('class') === "sign-in-htm") {
                event.target.querySelector('.error-message').textContent = `Пользователь ${serverRequest.name} успешно авторизован`;
            }
            if(event.target.getAttribute('class') === "sign-up-htm") {
                event.target.querySelector('.error-message').textContent = `Пользователь ${serverRequest.name} успешно зарегистрирован`;
            }
        }
    }












    formLog.addEventListener('submit', loadForm);
    formSign.addEventListener('submit', loadForm);

    //Array.from(buttons).forEach(button => button.addEventListener('submit', loadForm));

})