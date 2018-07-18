'use strict';

function controlBuy(container) {

    let buttons = container.querySelectorAll('.add-to-cart');
    function tabButton(event) {
        event.preventDefault();
        event.stopPropagation();
        const item = {
            title: event.target.dataset.title,
            price: event.target.dataset.price
        }
        addToCart(item)
    }

    Array.from(buttons).forEach(button => button.addEventListener('click', tabButton));

    container.addEventListener('DOMNodeInserted', function(event){
        event.target.querySelector('.add-to-cart').addEventListener('click', tabButton)
    })
}


const itemList = document.querySelector('.items-list');

document.addEventListener('DomContentLoaded', controlBuy(itemList))
