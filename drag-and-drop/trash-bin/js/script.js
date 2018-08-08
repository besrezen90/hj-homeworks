'use strict'

let movedPiece = null;
let oldCoord = null;

document.addEventListener('mousedown', event => {
    if (event.target.classList.contains('logo')) {
        oldCoord = {
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top
        };
        movedPiece = event.target;
        movedPiece.classList.add('moving');
    }
});

document.addEventListener('mousemove', event => {
    if (movedPiece) {
        // Предотвращаем выделение текста
        event.preventDefault();
        movedPiece.style.left = `${event.pageX - (movedPiece.width / 2)}px`;
        movedPiece.style.top = `${event.pageY - (movedPiece.height / 2)}px`;

    }
    else movedPiece = null;
});

document.addEventListener('mouseup', event => {
    if (movedPiece) {
        movedPiece.classList.remove('moving');
        movedPiece.style.visibility = 'hidden';
        const trashBin = document.elementFromPoint(event.clientX, event.clientY).closest('#trash_bin');
        movedPiece.style.visibility = 'visible';
        if (trashBin) {
            movedPiece.style.display = 'none';
            movedPiece = null;
            oldCoord = null;
        }  else {
            movedPiece.style.left = `${oldCoord.x}px`;
            movedPiece.style.top = `${oldCoord.y}px`;
            oldCoord = null;
            movedPiece = null;
        }
    }
});

