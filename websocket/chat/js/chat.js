'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const chat = document.querySelector('.chat'),
        messageBox = chat.querySelector('.message-box'),
        messageInput = chat.querySelector('.message-input'),
        messageSubmit = chat.querySelector('.message-submit'),
        messagesContent = chat.querySelector('.messages-content'),
        chatStatus = chat.querySelector('.chat-status');


    /* templates */
    const messageLoading = document.querySelector('.message.loading'),
        message = Array.from(document.querySelectorAll('.message')).find(elem => elem.classList.length === 1),
        messagePersonal = document.querySelector('.message-personal'),
        messageStatus = document.querySelector('.message-status');



    const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');

    connection.addEventListener('open', () => {
        let newMessage = messageStatus.cloneNode(true);
        newMessage.querySelector('.message-text').textContent = 'Пользователь появился в сети';
        messagesContent.appendChild(newMessage)
        messageSubmit.disabled = false;
        chatStatus.textContent = chatStatus.dataset.online
    });

    connection.addEventListener('message', event => {
        if (event.data === '...') {
            let newMessage = messageLoading.cloneNode(true);
            newMessage.querySelector('span').textContent = 'Пользователь наберает сообщение';
            messagesContent.appendChild(newMessage)
        }
        if (event.data !== '...'){
            var d = new Date();
            let datetext = d.getHours() + ":" + d.getMinutes();
            let newMessage = message.cloneNode(true);
            newMessage.querySelector('.message-text').textContent = event.data;
            newMessage.querySelector('.timestamp').textContent = datetext;
            messagesContent.appendChild(newMessage);
            let delMess = Array.from(messagesContent.querySelectorAll('.message.loading'));
            delMess.forEach(item => messagesContent.removeChild(item));
        }

    });

    messageInput.addEventListener('focusin', function(){
        connection.send("...")
    })


    function creatMess(event) {
        event.preventDefault();
        var d = new Date();
        let datetext = d.getHours() + ":" + d.getMinutes();
        let newMessage = messagePersonal.cloneNode(true);
        newMessage.querySelector('.message-text').textContent = messageInput.value;
        newMessage.querySelector('.timestamp').textContent = datetext;
        if (messageInput.value.length === 0) return;
        connection.send(messageInput.value)
        messagesContent.appendChild(newMessage)
        messageInput.value = '';
    }

    messageBox.addEventListener('submit', creatMess)


    connection.addEventListener('close', event => {
        let newMessage = messageStatus.cloneNode(true);
        newMessage.querySelector('.message-text').textContent = 'Пользователь не в сети';
        messagesContent.appendChild(newMessage)
        messageSubmit.disabled = true;
        chatStatus.textContent = chatStatus.dataset.offline
        connection.close(1000, 'Работа закончена');
    });
})