'use strict'

const leftEye = document.querySelector('.cat_position_for_left_eye'),
    rightEye = document.querySelector('.cat_position_for_right_eye');

let coord = null;

function catEye(eye, coord) {
    const pupil = eye.querySelector('.cat_eye');
    pupil.style.transition = 'none';

    const coef = {
        x: (eye.getBoundingClientRect().right - eye.getBoundingClientRect().left + pupil.clientWidth) / document.documentElement.clientWidth,
        y: (eye.getBoundingClientRect().bottom - eye.getBoundingClientRect().top + pupil.clientHeight) / document.documentElement.clientHeight
    }

    pupil.style.left = `${coord.x * coef.x}%`;
    pupil.style.top = `${coord.y * coef.y}%`;

}


document.addEventListener('mousemove', event => {
    coord = {
        x: event.pageX,
        y: event.pageY
    }

    catEye(leftEye, coord);
    catEye(rightEye, coord);

})