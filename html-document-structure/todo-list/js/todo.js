'use strict'

function getTodolist(container) {
    const done = container.querySelector('.done'),
        undone = container.querySelector('.undone'),
        inputs = container.querySelectorAll('input');

    inputs.forEach(input => input.addEventListener('click', event => transferInput()));


    function transferInput() {
        let listitem = event.target.parentElement;
        if (listitem.parentElement === done) {
            done.removeChild(listitem);
            undone.appendChild(listitem);
        } else if (listitem.parentElement === undone) {
            undone.removeChild(listitem);
            done.appendChild(listitem);
        }
    }
}

const todolists = document.querySelectorAll('.todo-list');
document.addEventListener('DOMContentLoaded', function () {
    Array.from(todolists).forEach(todolist => getTodolist(todolist));
});