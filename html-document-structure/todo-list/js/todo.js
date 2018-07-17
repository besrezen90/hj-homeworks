'use strict'

function controlTodolist(container) {
    const done = container.querySelector('.done'),
        undone = container.querySelector('.undone'),
        inputs = container.querySelectorAll('input');

    inputs.forEach(input => input.addEventListener('click', transferInput));

    function transferInput(event) {
        let listitem = event.target.parentElement;

        if (event.target.checked) {
            done.appendChild(listitem);
        } else {
            undone.appendChild(listitem);
        }
    }
}

const todolists = document.querySelectorAll('.todo-list');
document.addEventListener('DOMContentLoaded', function () {
    Array.from(todolists).forEach(todolist => controlTodolist(todolist));
});