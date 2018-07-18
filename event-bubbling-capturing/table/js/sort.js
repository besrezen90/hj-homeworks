'use strict';

function handleTableClick(event) {

    const titles = table.querySelectorAll('th.prop__name');

    Array.from(titles).forEach(function (elem) {
        if (!(elem === event.target)) return;

        if (event.target.dataset.dir) {
            event.target.dataset.dir = new Number(event.target.dataset.dir) * (-1);
        } else event.target.dataset.dir = 1;
        table.dataset.sortBy = event.target.dataset.propName;

        sortTable(table.dataset.sortBy, event.target.dataset.dir);
    })
}