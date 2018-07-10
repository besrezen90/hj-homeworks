"use strict"

const currencyList = new XMLHttpRequest();
let content = document.getElementById("content");

currencyList.addEventListener("loadstart", LoadStart);
currencyList.addEventListener("load", onLoad);
currencyList.addEventListener("loadend", loadEnd);
currencyList.open("GET", "https://neto-api.herokuapp.com/currency");
currencyList.send();


function LoadStart() {
    document.getElementById("loader").classList.remove("hidden");
}

function onLoad() {
    let listForm = content.querySelectorAll("select");
    const newCurList = JSON.parse(currencyList.responseText);
    for (let i = 0; i < listForm.length; i++) {
        Array.from(newCurList).forEach(item => {
            let elem = document.createElement("option")
            elem.innerText = item.code;
            elem.value = item.value;
            elem.dataset.name = item.title;
            listForm[i].appendChild(elem);
        });

    }
    calc();
}

function loadEnd() {
    document.getElementById("loader").classList.add("hidden");
    content.classList.remove("hidden");
}

let count = document.getElementById("source"),
    countFrom = document.getElementById("from"),
    countTo = document.getElementById("to");

function calc() {
    document.getElementById("result").innerText = (count.value * countFrom.value / countTo.value).toFixed(2);
}

count.addEventListener('change', calc);
countFrom.addEventListener('change', calc);
countTo.addEventListener('change', calc);

