'use strict';

document.addEventListener('DOMContentLoaded', () => {


    // Запрашиваем доступ к видеокамере
    navigator.mediaDevices
        .getUserMedia({
            video: true,
            audio: false
        })
        .then((stream) => {
            let video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            document.querySelector('.app').insertBefore(video, document.getElementById('error-message'));
            document.querySelector('.controls').style.display = 'block'

        })
        .catch(err => {
            document.getElementById('error-message').style.display = 'block'
            document.getElementById('error-message').textContent = err;
        });





    //Съемка фото
    const button = document.getElementById('take-photo'); //Кнопка

    const audio = document.createElement('audio'); //Аудио
    audio.src = './audio/click.mp3';

    button.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
        takeSnapshot();

    })


        //Создание HTML Элемента из объекта
        function createElement(block) {
            if ((block === undefined) || (block === null) || (block === false)) {
                return document.createTextNode('');
            }
            if ((typeof block === 'string') || (typeof block === 'number') || (block === true)) {
                return document.createTextNode(block.toString());
            }
            if (Array.isArray(block)) {
                return block.reduce((f, elem) => {
                    f.appendChild(createElement(elem));

                    return f;
                }, document.createDocumentFragment());
            }

            const element = document.createElement(block.block || 'div');

            [].concat(block.cls || []).forEach(
                className => element.classList.add(className)
            );

            if (block.attrs) {
                Object.keys(block.attrs).forEach(
                    key => element.setAttribute(key, block.attrs[key])
                );
            }

            if (block.content) element.appendChild(createElement(block.content));

            return element;
        }
        //Создание объекта из сохраненной фотографии (в аргумент падает сохраненная фотография)
        function createPhotoFromList(photo) {
            return {
                block: 'figure',
                content: [{
                    block: 'img',
                    attrs: {src: photo}
                }, {
                    block: 'figcaption',
                    content: [{
                        block: 'a',
                        attrs: {href: photo, download: 'что-то'},
                        content: [{
                            block: 'i',
                            cls: 'material-icons',
                            content: ['file_download']
                        }]
                    }, {
                        block: 'a',
                        content: [{
                            block: 'i',
                            cls: 'material-icons',
                            content: ['file_upload']
                        }]
                    }, {
                        block: 'a',
                        content: [{
                            block: 'i',
                            cls: 'material-icons',
                            content: ['delete']
                        }]
                    }]

                }]

               
           }
       };
        

        function takeSnapshot() {

            var hidden_canvas = document.createElement('canvas'),
                video = document.querySelector('video'),
                /*                 image = document.querySelector('img.photo'), */

                // Получаем размер видео элемента.
                width = video.videoWidth,
                height = video.videoHeight,

                // Объект для работы с canvas.
                context = hidden_canvas.getContext('2d');


            // Установка размеров canvas идентичных с video.
            hidden_canvas.width = width;
            hidden_canvas.height = height;

            // Отрисовка текущего кадра с video в canvas.
            context.drawImage(video, 0, 0, width, height);

            // Преобразование кадра в изображение dataURL.
            var imageDataURL = hidden_canvas.toDataURL('image/png');


            document.querySelector('.list').appendChild(createElement(createPhotoFromList(imageDataURL)))

        }




/* В функции createElement на возвращаемый объект element повесить событие для скачивания, удаления и загрузки фотографий на сервер */


























})