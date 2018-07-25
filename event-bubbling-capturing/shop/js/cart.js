'use strict';

function controlBuy(container) {
    container.addEventListener('click', clickAddToCart);

    function clickAddToCart(event) {
        if(!event.target.classList.contains('add-to-cart')) return
        event.preventDefault();
        const item = {
            title: event.target.dataset.title,
            price: event.target.dataset.price
        }
        addToCart(item)
    }
}


const itemList = document.querySelector('.items-list');

document.addEventListener('DomContentLoaded', controlBuy(itemList))