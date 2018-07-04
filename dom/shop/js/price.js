'use strict'
let butAdd = document.querySelectorAll(".add"),
    count = document.getElementById("cart-count"),
    totalPrice = document.getElementById("cart-total-price");
totalPrice.dataset.prices = 0;



function addItems(event) {
    count.innerHTML = `${Number(count.innerHTML) + 1}`
    let price = Number(totalPrice.dataset.prices) + Number(event.currentTarget.dataset.price)
    totalPrice.dataset.prices = price;
    totalPrice.innerHTML = `${getPriceFormatted(price)}`
}



Array.from(butAdd).forEach(button => button.addEventListener('click', addItems))