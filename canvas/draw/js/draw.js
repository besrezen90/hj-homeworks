'use strict';
document.addEventListener('DOMContentLoaded', function () {

    function createDraw() {

        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
        ctx.beginPath();
        ctx.fillStyle = '#f2f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.closePath();


        const BRUSH_RADIUS = 6;
        let drawing = false;
        let curves = [];
        let needsRepaint = false;


        function circle(point) {
            ctx.beginPath();
            ctx.arc(...point, BRUSH_RADIUS / 2, 0, 2 * Math.PI);
            ctx.fill();
        }

        function smoothCurveBetween(p1, p2) {
            // Bezier control point
            const cp = p1.map((coord, idx) => (coord + p2[idx]) / 2);
            ctx.quadraticCurveTo(...p1, ...cp);
        }

        function smoothCurve(points) {
            ctx.beginPath();
            ctx.lineWidth = BRUSH_RADIUS;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';

            ctx.moveTo(...points[0]);

            for (let i = 1; i < points.length - 1; i++) {
                smoothCurveBetween(points[i], points[i + 1]);
            }

            ctx.stroke();
        }

        function makePoint(x, y, ) {
            return [x, y];
        };


        canvas.addEventListener("mousedown", (evt) => {
            console.log('down')
            drawing = true;
            /* weird = evt.shiftKey; // press shift to make things weird =) */
            /* undone = []; // reset the undone stack */

            const curve = []; // create a new curve

            curve.push(makePoint(evt.offsetX, evt.offsetY)); // add a new point
            curves.push(curve); // add the curve to the array of curves
            needsRepaint = true;
        });

        canvas.addEventListener("mouseup", (evt) => {
            console.log('up')
            drawing = false;
        });

        canvas.addEventListener("mouseleave", (evt) => {
            console.log('exit')
            drawing = false;
        });
        canvas.addEventListener("mousemove", (evt) => {
            if (drawing) {
                // add a point
                const point = makePoint(evt.offsetX, evt.offsetY)
                curves[curves.length - 1].push(point);
                needsRepaint = true;
            }
        });
    }
















    window.addEventListener('resize', createDraw)
    const canvas = document.getElementById('draw');
    const body = document.querySelector('body');
    const ctx = canvas.getContext('2d');


    createDraw()

})