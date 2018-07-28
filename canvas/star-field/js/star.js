'use strict'

document.addEventListener('DOMContentLoaded', () => {

    function createSky() {
        ctx.beginPath();
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.closePath();

        const starsQuantity = Math.random() * (400 - 200) + 200;
        const starColors = ['#ffffff', '#ffe9c4', '#d4fbff'];

        for (let i = 0; i < starsQuantity; i++) {
            let starsSize = Math.random() * 1.1;
            let starColor = starColors[Math.floor(Math.random() * 2)];
            let starX = Math.random() * canvas.width;
            let starY = Math.random() * canvas.height;
            ctx.beginPath();
            ctx.arc(starX, starY, starsSize, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = starColor;
            ctx.globalAlpha = 0.8 + Math.random() * 0.2;
            ctx.fill();
        }
    }

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    canvas.addEventListener('click', createSky);

    createSky();
})