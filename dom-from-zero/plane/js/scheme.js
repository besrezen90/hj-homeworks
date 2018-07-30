'use strict'
document.addEventListener('DOMContentLoaded', function () {


    function schemeJsTemplate(scheme) {
        const seatMapTitle = document.getElementById('seatMapTitle');
        seatMapTitle.textContent = `${scheme.title} (${scheme.passengers} пассажиров)`;
        if (document.querySelector('#seatMapDiv h3')) document.querySelector('#seatMapDiv h3').remove()

        for (let i = 0; i < scheme.scheme.length; i++) {
            const main = document.createElement('div');
            main.classList.add('row', 'seating-row', 'text-center');

            const rowNumber = document.createElement('div');
            rowNumber.classList.add('col-xs-1', 'row-number');
            const rowNumberTitle = document.createElement('h2');
            rowNumberTitle.textContent = i + 1;
            rowNumber.appendChild(rowNumberTitle);

            main.appendChild(rowNumber)

            const leftRow = document.createElement('div');
            leftRow.className = "col-xs-5";
            const rightRow = document.createElement('div');
            rightRow.className = "col-xs-5";

            const placeNoSeat = document.createElement('div');
            placeNoSeat.classList.add('col-xs-4', 'no-seat')


            if (scheme.scheme[i] === 6) {

                for (let j = 0; j < 3; j++) {
                    const place = document.createElement('div');
                    place.classList.add('col-xs-4', 'seat')
                    const span = document.createElement('span');
                    span.className = "seat-label";
                    span.textContent = scheme.letters6[j];
                    place.appendChild(span)
                    leftRow.appendChild(place)
                }

                for (let j = 3; j < 6; j++) {
                    const place = document.createElement('div');
                    place.classList.add('col-xs-4', 'seat')
                    const span = document.createElement('span');
                    span.className = "seat-label";
                    span.textContent = scheme.letters6[j];
                    place.appendChild(span)
                    rightRow.appendChild(place)
                }
                main.appendChild(leftRow);
                main.appendChild(rightRow);

            }
            if (scheme.scheme[i] === 4) {


                for (let j = 0; j < 3; j++) {
                    if (j === 0) {
                        const place = document.createElement('div');
                        place.classList.add('col-xs-4', 'no-seat')
                        leftRow.appendChild(place)
                    } else {
                        const place = document.createElement('div');
                        place.classList.add('col-xs-4', 'seat')
                        const span = document.createElement('span');
                        span.className = "seat-label";
                        span.textContent = scheme.letters6[j];
                        place.appendChild(span)
                        leftRow.appendChild(place)
                    }
                }

                for (let j = 3; j < 6; j++) {
                    if (j === 5) {
                        const place = document.createElement('div');
                        place.classList.add('col-xs-4', 'no-seat')
                        rightRow.appendChild(place)
                    } else {
                        const place = document.createElement('div');
                        place.classList.add('col-xs-4', 'seat')
                        const span = document.createElement('span');
                        span.className = "seat-label";
                        span.textContent = scheme.letters6[j];
                        place.appendChild(span)
                        rightRow.appendChild(place)
                    }

                }
                main.appendChild(leftRow);
                main.appendChild(rightRow);
            }
            if (scheme.scheme[i] === 0) {


                for (let j = 0; j < 3; j++) {
                    const place = document.createElement('div');
                    place.classList.add('col-xs-4', 'no-seat')
                    leftRow.appendChild(place)
                }


                for (let j = 3; j < 6; j++) {
                    const place = document.createElement('div');
                    place.classList.add('col-xs-4', 'no-seat')
                    rightRow.appendChild(place)
                }
                main.appendChild(leftRow);
                main.appendChild(rightRow);

            }
            seatMapDiv.appendChild(main)
        }

    };

    function controllPlace(container) {
        container.addEventListener('click', reservPlace);

        function reservPlace(event) {
            if (event.altKey) {
                if (event.target.parentNode.classList.contains('seat')) {
                    event.target.parentNode.classList.remove('adult')
                    event.target.parentNode.classList.toggle('half')
                }
                if (event.target.classList.contains('seat')) {
                    event.target.classList.remove('adult')
                    event.target.classList.toggle('half')
                }
            } else {
                if (event.target.parentNode.classList.contains('seat')) {
                    event.target.parentNode.classList.remove('half')
                    event.target.parentNode.classList.toggle('adult')
                }
                if (event.target.classList.contains('seat')) {
                    event.target.classList.remove('half')
                    event.target.classList.toggle('adult')
                }
            }
            totalPax.textContent = document.querySelectorAll('div.seat.adult').length + document.querySelectorAll('div.seat.half').length;
            totalAdult.textContent = document.querySelectorAll('div.seat.adult').length;
            totalHalf.textContent = document.querySelectorAll('div.seat.half').length;

        }

    }


    const btnSeatMap = document.getElementById('btnSeatMap'),
        selectAircraft = document.getElementById('acSelect'),
        btnSetFull = document.getElementById('btnSetFull'),
        btnSetEmpty = document.getElementById('btnSetEmpty'),
        seatMapDiv = document.getElementById('seatMapDiv');


    document.addEventListener('DOMContentLoaded', controllPlace(seatMapDiv));




    btnSetFull.disabled = true;
    btnSetEmpty.disabled = true;

    const totalPax = document.getElementById('totalPax'),
        totalAdult = document.getElementById('totalAdult'),
        totalHalf = document.getElementById('totalHalf');
    totalPax.textContent = document.querySelectorAll('div.seat.adult').length + document.querySelectorAll('div.seat.half').length;
    totalAdult.textContent = document.querySelectorAll('div.seat.adult').length;
    totalHalf.textContent = document.querySelectorAll('div.seat.half').length;




    btnSetFull.addEventListener('click', function (event) {
        event.preventDefault();
        const place = document.querySelectorAll('div.seat')
        place.forEach(elem => {
            elem.classList.remove('half')
            elem.classList.add('adult')
        })
        totalPax.textContent = document.querySelectorAll('div.seat.adult').length + document.querySelectorAll('div.seat.half').length;
        totalAdult.textContent = document.querySelectorAll('div.seat.adult').length;
        totalHalf.textContent = document.querySelectorAll('div.seat.half').length;

    })

    btnSetEmpty.addEventListener('click', function (event) {
        event.preventDefault();
        const place = document.querySelectorAll('div.seat')
        place.forEach(elem => elem.classList.remove('adult', 'half'))
        totalPax.textContent = document.querySelectorAll('div.seat.adult').length + document.querySelectorAll('div.seat.half').length;
        totalAdult.textContent = document.querySelectorAll('div.seat.adult').length;
        totalHalf.textContent = document.querySelectorAll('div.seat.half').length;

    })


    btnSeatMap.addEventListener('click', function (event) {
        event.preventDefault()
        const mainSchemes = Array.from(seatMapDiv.querySelectorAll('div'));
        if (mainSchemes) {
            mainSchemes.forEach(function (elem) {
                elem.remove()
            });
        }
        fetch(`https://neto-api.herokuapp.com/plane/${selectAircraft.options[selectAircraft.selectedIndex].value}`)
            .then(res => res.json())
            .then(schemeJsTemplate)
        btnSetFull.disabled = false;
        btnSetEmpty.disabled = false;
        totalPax.textContent = document.querySelectorAll('div.seat.adult').length + document.querySelectorAll('div.seat.half').length;
        totalAdult.textContent = document.querySelectorAll('div.seat.adult').length;
        totalHalf.textContent = document.querySelectorAll('div.seat.half').length;
    })

})