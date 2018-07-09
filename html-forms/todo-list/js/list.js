'use strict'
let list = document.querySelector(".list-block"),
    listItem = list.querySelectorAll("li"),
    input = list.querySelectorAll("li input"),
    output = list.querySelector("h3 output"),


function toDoShow() {
    let startCount = Array.from(input).filter(elem => {
        return elem.checked === true
    })
    output.innerText = `${startCount.length} из ${listItem.length}`
    if(startCount.length === listItem.length) list.classList.add("complete")
    else list.classList.remove("complete")

}

document.addEventListener('DOMContentLoaded', toDoShow)
Array.from(input).forEach(elem => elem.addEventListener('change', toDoShow))

