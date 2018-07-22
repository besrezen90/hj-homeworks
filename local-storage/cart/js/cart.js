'use strict';
document.addEventListener('DOMContentLoaded', function () {



    const colors = new XMLHttpRequest();
    colors.addEventListener('load', onLoadColors)
    colors.open('GET', 'https://neto-api.herokuapp.com/cart/colors');
    colors.send();

    function onLoadColors() {
        const colorSwatch = document.getElementById('colorSwatch');
        let serverRequest = JSON.parse(colors.responseText);
        for (let color of serverRequest) {
            const colorBlock = document.createElement('div');
            colorBlock.dataset.value = color.type;
            colorBlock.classList.add(`swatch-element`)
            colorBlock.classList.add(`color`)
            colorBlock.classList.add(`${color.type}`)
            const tooltip = document.createElement('div');
            colorBlock.appendChild(tooltip);
            tooltip.classList.add('tooltip');
            tooltip.textContent = color.title;
            const input = document.createElement('input');
            colorBlock.appendChild(input);
            input.setAttribute('quickbeam', 'color');
            input.setAttribute('id', `swatch-1-${color.type}`);
            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'color');
            input.setAttribute('value', `${color.type}`);
            const label = document.createElement('label');
            colorBlock.appendChild(label);
            label.setAttribute('for', `swatch-1-${color.type}`);
            label.setAttribute('style', `border-color: ${color.type}`);
            const span = document.createElement('span');
            label.appendChild(span);
            span.setAttribute('style', `background-color: ${color.type}`);
            const img = document.createElement('img');
            label.appendChild(img);
            img.classList.add("crossed-out");
            img.setAttribute('src', "https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886");


            if (color.isAvailable) {
                colorBlock.classList.add(`available`)
                input.disabled = false;
                input.checked = true;

            } else {
                colorBlock.classList.add(`soldout`)
                input.disabled = true;
            }


            colorSwatch.appendChild(colorBlock)
        }
    }

    const sizes = new XMLHttpRequest();
    sizes.addEventListener('load', onLoadSizes)
    sizes.open('GET', 'https://neto-api.herokuapp.com/cart/sizes');
    sizes.send();

    function onLoadSizes() {
        const sizeSwatch = document.getElementById('sizeSwatch');
        let serverRequest = JSON.parse(sizes.responseText);
        for (let size of serverRequest) {

            const sizeBlock = document.createElement('div');
            sizeBlock.dataset.value = size.type;
            sizeBlock.classList.add(`swatch-element`)
            sizeBlock.classList.add(`plain`)
            sizeBlock.classList.add(`${size.type}`)

            const input = document.createElement('input');
            sizeBlock.appendChild(input);
            input.setAttribute('id', `swatch-0-${size.type}`);
            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'size');
            input.setAttribute('value', `${size.type}`);
            const label = document.createElement('label');
            sizeBlock.appendChild(label);
            label.setAttribute('for', `swatch-0-${size.type}`);
            label.textContent = size.title;

            const img = document.createElement('img');
            label.appendChild(img);
            img.classList.add("crossed-out");
            img.setAttribute('src', "https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886");

            if (size.isAvailable) {
                sizeBlock.classList.add(`available`)
                input.disabled = false;
                input.checked = true;
            } else {
                sizeBlock.classList.add(`soldout`)
                input.disabled = true;
            }

            sizeSwatch.appendChild(sizeBlock)
        }



    }


    const cart = new XMLHttpRequest();
    cart.addEventListener('load', onLoadCart)
    cart.open('GET', 'https://neto-api.herokuapp.com/cart');
    cart.send();

    function onLoadCart() {
        const quickCart = document.getElementById('quick-cart');
        let serverRequest = JSON.parse(cart.responseText);

        for (let item of serverRequest) {

            const itemBlock = document.createElement('div');
            itemBlock.classList.add(`quick-cart-product`)
            itemBlock.classList.add(`quick-cart-product-static`)
            itemBlock.setAttribute('id', `quick-cart-product-${item.id}`);

            const productWrap = document.createElement('div');
            itemBlock.appendChild(productWrap);
            productWrap.classList.add('quick-cart-product-wrap');

            const img = document.createElement('img');
            productWrap.appendChild(img);
            img.setAttribute('src', `${item.pic}`);
            img.setAttribute('title', `${item.title}`);

            const span = document.createElement('span');
            productWrap.appendChild(span);
            span.classList.add('s1')
            span.setAttribute('style', `background-color: #000; opacity: .5`);
            span.textContent = `${item.price * item.quantity}`;

            const span2 = document.createElement('span');
            productWrap.appendChild(span2);
            span.classList.add('s2');

            const countSpan = document.createElement('span');
            itemBlock.appendChild(countSpan);
            countSpan.classList.add('count hide dafeUp');
            countSpan.setAttribute('id', `quick-cart-product-${item.id}`);
            countSpan.textContent = `${item.quantity}`;

            const removeSpan = document.createElement('span');
            itemBlock.appendChild(removeSpan);
            removeSpan.classList.add('quick-cart-product-remove remove');
            removeSpan.dataset.id = item.id;
            quickCart.appendChild(itemBlock)

        }

        const cartLink = document.createElement('a');
        quickCart.appendChild(cartLink);
        cartLink.classList.add('cart-ico');
        if (quickCart.firstElementChild === cartLink) cartLink.classList.add('open');
        else cartLink.classList.remove('open');
        cartLink.setAttribute('id', `quick-cart-pay`);
        cartLink.setAttribute('quickbeam', "cart-pay");

        const span = document.createElement('span');
        cartLink.appendChild(span);

        const strong = document.createElement('strong');
        span.appendChild(strong);
        strong.classList.add('quick-cart-text');
        strong.innerHTML = 'Оформить заказ<br>';

        const span2 = document.createElement('span');
        span.appendChild(span2);
        span2.setAttribute('id', `quick-cart-price`);
        span2.textContent = '$800.00';
    }

    const addForm = document.getElementById('AddToCartForm');

    function addToCart(event) {

        event.preventDefault()

        const formData = new FormData(event.target);
        formData.append('productId', `${event.target.getAttribute('data-product-id')}`)


        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', onLoad);
        xhr.open('POST', 'https://neto-api.herokuapp.com/cart');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(formData);

        function onLoad() {
            const serverRequest = JSON.parse(xhr.responseText);
            console.log(serverRequest)
        }
    }

    addForm.addEventListener('submit', addToCart);





















})




































// let getColors = fetch('https://neto-api.herokuapp.com/cart/colors') //Запрос цвета
//     .then((res) => {
//         if (200 <= res.status && res.status < 300) {
//             return res;
//         }
//         throw new Error(response.statusText);
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         const colorSwatch = document.getElementById('colorSwatch');

//         for (let color of data) {

//             const colorBlock = document.createElement('div');
//             colorBlock.dataset.value = color.type;
//             colorBlock.classList.add(`swatch-element`)
//             colorBlock.classList.add(`color`)
//             colorBlock.classList.add(`${color.type}`)
//             const tooltip = document.createElement('div');
//             colorBlock.appendChild(tooltip);
//             tooltip.classList.add('tooltip');
//             tooltip.textContent = color.title;
//             const input = document.createElement('input');
//             colorBlock.appendChild(input);
//             input.setAttribute('quickbeam', 'color');
//             input.setAttribute('id', `swatch-1-${color.type}`);
//             input.setAttribute('type', 'radio');
//             input.setAttribute('name', 'color');
//             input.setAttribute('value', `${color.type}`);
//             const label = document.createElement('label');
//             colorBlock.appendChild(label);
//             label.setAttribute('for', `swatch-1-${color.type}`);
//             label.setAttribute('style', `border-color: ${color.type}`);
//             const span = document.createElement('span');
//             label.appendChild(span);
//             span.setAttribute('style', `background-color: ${color.type}`);
//             const img = document.createElement('img');
//             label.appendChild(img);
//             img.classList.add("crossed-out");
//             img.setAttribute('src', "https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886");


//             if (color.isAvailable) {
//                 colorBlock.classList.add(`available`)
//                 input.disabled = false;
//             } else {
//                 colorBlock.classList.add(`soldout`)
//                 input.disabled = true;
//             }

//             colorSwatch.appendChild(colorBlock)
//         }

//     })
//     .catch((error) => {
//         console.log(error)
//     });


// let getSize = fetch('https://neto-api.herokuapp.com/cart/sizes') //Запрос размера
//     .then((res) => {
//         if (200 <= res.status && res.status < 300) {
//             return res;
//         }
//         throw new Error(response.statusText);
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         const sizeSwatch = document.getElementById('sizeSwatch');
//         for (let size of data) {

//             const sizeBlock = document.createElement('div');
//             sizeBlock.dataset.value = size.type;
//             sizeBlock.classList.add(`swatch-element`)
//             sizeBlock.classList.add(`plain`)
//             sizeBlock.classList.add(`${size.type}`)

//             const input = document.createElement('input');
//             sizeBlock.appendChild(input);
//             input.setAttribute('id', `swatch-0-${size.type}`);
//             input.setAttribute('type', 'radio');
//             input.setAttribute('name', 'size');
//             input.setAttribute('value', `${size.type}`);
//             const label = document.createElement('label');
//             sizeBlock.appendChild(label);
//             label.setAttribute('for', `swatch-0-${size.type}`);
//             label.textContent = size.title;

//             const img = document.createElement('img');
//             label.appendChild(img);
//             img.classList.add("crossed-out");
//             img.setAttribute('src', "https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886");

//             if (size.isAvailable) {
//                 sizeBlock.classList.add(`available`)
//                 input.disabled = false;
//             } else {
//                 sizeBlock.classList.add(`soldout`)
//                 input.disabled = true;
//             }

//             sizeSwatch.appendChild(sizeBlock)
//         }

//     })
//     .catch((error) => {
//         console.log(error)
//     });