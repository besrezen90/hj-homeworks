'use strict'
let butAdd = document.querySelectorAll(".add"),
    count = document.getElementById("cart-count"),
    totalPrice = document.getElementById("cart-total-price"),
    calcTotalPrice = 0;



function addItems(event) {
    count.innerHTML = `${Number(count.innerHTML) + 1}`;
    let price = Number(calcTotalPrice) + Number(event.currentTarget.dataset.price);
    calcTotalPrice = price;
    totalPrice.innerHTML = `${getPriceFormatted(price)}`;
}



Array.from(butAdd).forEach(button => button.addEventListener('click', addItems));