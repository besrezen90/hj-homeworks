'use strict'

const contentForm = document.querySelector('.contentform'),
    contentMain = document.querySelector('main'),
    inputs = Array.from(contentForm.querySelectorAll('input')),
    outputs = Array.from(contentMain.querySelectorAll('output')),
    inputIndex = contentForm.querySelector('input[name="zip"]'),
    textArea = contentForm.querySelector('textarea'),
    buttons = Array.from(document.querySelectorAll(".button-contact"));

// Проверка формы на заполнение

function checkForm() {
    function checkInputs(input) {
        return input.value.length > 0;
    }
    if (inputs.every(checkInputs) && textArea.value.length > 0) {
        contentForm.querySelector("button").removeAttribute("disabled");
    } else contentForm.querySelector("button").setAttribute("disabled", "disabled");
}

// Регламентируем ввод в поле индекс только чисел

function checkIndex(event) {
    event.currentTarget.value = event.currentTarget.value.replace(/[^\d]/g, '');
}

// Нажатие на кнопку

function sendForm(event) {
    event.preventDefault();
    if (contentForm.classList.contains("hidden")) {
        contentForm.classList.remove('hidden');
        contentMain.classList.add('hidden');
    } else {
        contentForm.classList.add('hidden');
        contentMain.classList.remove('hidden');
        outputs.forEach(function(output){
            inputs.forEach(function(input){
                if(output.getAttribute('id') === "message") {
                    output.innerText = textArea.value;
                }
                if(output.getAttribute('id') === input.getAttribute('name')){
                    output.innerText = input.value;
                }
            })
        })
    }
}

inputs.forEach(elem => elem.addEventListener('input', checkForm));
textArea.addEventListener('input', checkForm);
inputIndex.addEventListener('input', checkIndex);
buttons.forEach(elem => elem.addEventListener('click', sendForm));