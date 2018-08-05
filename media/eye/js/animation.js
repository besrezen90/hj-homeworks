'use strict';

document.addEventListener('mousemove', event => {

    const mousemove = [event.clientX, event.clientY] //Определяем координаты мыши

    const eye = document.querySelector('.big-book__pupil'); //Глаз


    const eyeCenter = [eye.getBoundingClientRect().left + (eye.offsetWidth / 2), eye.getBoundingClientRect().top + (eye.offsetHeight / 2)] // Координаты центра глаза

    const vectorLength = Math.sqrt(Math.pow((mousemove[0] - eyeCenter[0]), 2) + Math.pow((mousemove[1] - eyeCenter[1]), 2)) //Длина вектора

    const width = document.querySelector('body').offsetWidth;
    const height = document.querySelector('body').offsetHeight;

    function changeSize(length) {

        let size = 3 - (length * 2 / width) - (length * 2 / height)
        if (size < 1) size = 1;
        document.querySelector('.big-book__pupil').style.setProperty('--pupil-size', size);
    }

    changeSize(vectorLength)

    function changeAngle() {
        const maxGhangeX = 30 * (mousemove[0] - eyeCenter[0]) / (width / 2);
        document.querySelector('.big-book__pupil').style.setProperty('--pupil-x', `${maxGhangeX}px`);
        const maxGhangeY = 30 * (mousemove[1] - eyeCenter[1]) / (height / 2);
        document.querySelector('.big-book__pupil').style.setProperty('--pupil-y', `${maxGhangeY}px`);
    }
    changeAngle()
})