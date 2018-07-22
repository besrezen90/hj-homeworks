/* ------------------------ШПОРА------------------------------------- */


/* 'use strict';
localStorage.defaultColor;
localStorage.defaultSize;
//---------------GET COLORS & SIZES---------------------
const colorXHR = new XMLHttpRequest();
const sizeXHR = new XMLHttpRequest();
const data = {};
colorXHR.open('GET', 'https://neto-api.herokuapp.com/cart/colors', true);
sizeXHR.open('GET', 'https://neto-api.herokuapp.com/cart/sizes', true);
colorXHR.send();
sizeXHR.send();
colorXHR.addEventListener('load', () => data.colors = JSON.parse(colorXHR.response));
sizeXHR.addEventListener('load', () => data.sizes = JSON.parse(sizeXHR.response));
colorXHR.addEventListener('loadend', addColors);
sizeXHR.addEventListener('loadend', addSizes);
//-------------------------------------------------------

//-------------------SELECT ACTIVE PRODUCT-----------------------------
const thumbImages = document.getElementsByClassName('thumb-image');
const bigImage = document.getElementById('big-image');
let activeProduct = document.querySelector('.active');

Array.from(thumbImages).forEach(img => img.addEventListener('click', selectProduct));

function selectProduct(event) { 
  event.preventDefault();
  Array.from(thumbImages).forEach(img => img.classList.remove('active'));
  event.currentTarget.classList.add('active');
  activeProduct = event.currentTarget;
  bigImage.style.backgroundImage = `url(${event.currentTarget.getAttribute('href')})`;
}
//-------------------------------------------------------

//----------------ADD COLOR & SIZE SNIPPETS--------------------------
let colorSwatch = document.getElementById('colorSwatch');
let sizeSwatch = document.getElementById('sizeSwatch');

function addColors() { 
  //let target = event.currentTarget; //thumb-image
  let colorSnippet = data.colors.map((el, i) => `<div data-value="${el.code}" class="swatch-element color ${el.code} ${isAvailable(el)}">
  <div class="tooltip">${el.title}</div>
  <input quickbeam="color" id="swatch-${i}-${el.code}" type="radio" name="color" value="${el.code}" ${isCheckedOrDisabled(el, i)}>
  <label for="swatch-${i}-${el.code}" style="border-color: ${el.code};">
    <span style="background-color: ${el.code};"></span>
    <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
  </label>
</div>`);
  colorSwatch.innerHTML = colorSnippet.join(' ');
}

function addSizes() { 
  let sizeSnippet = data.sizes.map((el, i) => `<div data-value="${el.type}" class="swatch-element plain ${el.type} ${isAvailable(el)}">
  <input id="swatch-${i}-${el.type}" type="radio" name="size" value="${el.type}" ${isCheckedOrDisabled(el, i)}>
  <label for="swatch-${i}-${el.type}">
    ${el.title}
    <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
  </label>
</div>`);
  sizeSwatch.innerHTML = sizeSnippet.join(' ');
}

function isAvailable(element) { 
  return element.isAvailable ? 'available' : 'soldout';
}

function isCheckedOrDisabled(element, i) { 
  if (!element.isAvailable) {
    return 'disabled';
  }
  if (localStorage.defaultColor === element.type || localStorage.defaultSize === element.type) {
    return 'checked';
  }
  return '';
}
//-------------------------------------------------------

//----------------------CART---------------------------------
let cart = document.getElementById('quick-cart');
let form = document.getElementById('AddToCartForm');
const cartXHR = new XMLHttpRequest();
const removeXHR = new XMLHttpRequest();

const addButton = document.getElementById('AddToCart');
addButton.addEventListener('click', addToCart);

function addToCart(event) {
  event.preventDefault();
  cartXHR.open('POST', 'https://neto-api.herokuapp.com/cart', true);
  let formdata = new FormData(form);
  formdata.append('productId', form.dataset.productId);
  cartXHR.send(formdata);
}

cartXHR.addEventListener('load', updateCart);
removeXHR.addEventListener('load', updateCart)

function updateCart(event) { 
  let response = JSON.parse(event.currentTarget.response);
  if (response.error) { 
    console.log(response.message);
    return;
  }
  
  if (response.length === 0) { 
    cart.innerHTML = `<a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico open">
    <span>
      <strong class="quick-cart-text">Оформить заказ<br></strong>
      <span id="quick-cart-price">$0.00</span>
    </span>
    </a>`
    return;
  }
  cart.innerHTML = `<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${response[0].id}" style="opacity: 1;">
  <div class="quick-cart-product-wrap">
    <img src="${response[0].pic}" title="${response[0].title}">
    <span class="s1" style="background-color: #000; opacity: .5">$800.00</span>
    <span class="s2"></span>
  </div>
  <span class="count hide fadeUp" id="quick-cart-product-count-${response[0].id}">${response[0].quantity}</span>
  <span class="quick-cart-product-remove remove" data-id="${response[0].id}"></span>
  </div>
  <a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico open">
    <span>
      <strong class="quick-cart-text">Оформить заказ<br></strong>
      <span id="quick-cart-price">$${response[0].quantity * response[0].price}.00</span>
    </span>
  </a>`;
  const remove = cart.querySelector('.remove');
  remove.addEventListener('click', (event) => { 
    event.preventDefault();
    removeXHR.open('POST', 'https://neto-api.herokuapp.com/cart/remove', true);
    let body = new FormData();
    body.append('productId', event.currentTarget.dataset.id);
    removeXHR.send(body);
  })
}
//--------------------SET DEFAULT OPTIONS---------------------------------------
colorXHR.addEventListener('loadend', () => {
  sizeXHR.addEventListener('loadend', () => { 
    let swatches = Array.from(form.getElementsByTagName('input')).filter(el => el.type === 'radio');
    Array.from(swatches).forEach(swatch => swatch.addEventListener('click', save));
  });
})

function save(event) { 
  let target = event.currentTarget;
  if (target.name === 'color') { 
    localStorage.defaultColor = target.value;
  }
  if (target.name === 'size') { 
    localStorage.defaultSize = target.value;
  }
}

document.addEventListener('DOMContentLoaded', () => { 
  let updateXHR = new XMLHttpRequest();
  updateXHR.open('GET', 'https://neto-api.herokuapp.com/cart', true);
  updateXHR.send();
  updateXHR.addEventListener('load', updateCart);
}) */
















































































































































































/* --------------------------------------------------------------------------------------------------------------------- */

/* const colors = new XMLHttpRequest();
colors.addEventListener('load', onLoadColors)
colors.open('GET', 'https://neto-api.herokuapp.com/cart/colors');
colors.send();

const sizes = new XMLHttpRequest();
sizes.addEventListener('load', onLoadSizes)
sizes.open('GET', 'https://neto-api.herokuapp.com/cart/sizes');
sizes.send();

const cart = new XMLHttpRequest();
cart.addEventListener('load', onLoadCart)
// cart.addEventListener('load', createBasket)
cart.open('GET', 'https://neto-api.herokuapp.com/cart');
cart.send();



const addForm = document.getElementById('AddToCartForm');


function addToCart(event) {

    event.preventDefault()

    const formData = new FormData(event.target);
    formData.append('productId', event.target.getAttribute('data-product-id'))

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onLoad)
    xhr.open('POST', 'https://neto-api.herokuapp.com/cart');
    xhr.send(formData);

    function onLoad() {
        const serverRequest = JSON.parse(xhr.responseText);
        console.log(serverRequest)
    }
}

addForm.addEventListener('submit', addToCart); */

// const remove = document.querySelector('span')
// console.log(remove)
// function removeToCart(event) {

//     event.preventDefault()

//     const formData = new FormData();
//     formData.append('productId', document.getElementById('AddToCartForm').getAttribute('data-product-id'))

//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener('load', onLoad)
//     xhr.open('POST', 'https://neto-api.herokuapp.com/cart');
//     xhr.send(formData);

//     function onLoad() {
//         const serverRequest = JSON.parse(xhr.responseText);
//         console.log(serverRequest)
//     }
// }

// remove.addEventListener('click', removeToCart);






/* function onLoadColors() { //Выгружаем доступные цвета
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


function onLoadSizes() { //Выгружаем доступные размеры
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

function onLoadCart() { // Выгружаем состояние корзины
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
        countSpan.classList.add('count');
        countSpan.classList.add('hide');
        countSpan.classList.add('dafeUp');
        countSpan.setAttribute('id', `quick-cart-product-${item.id}`);
        countSpan.textContent = `${item.quantity}`;

        const removeSpan = document.createElement('span');
        itemBlock.appendChild(removeSpan);
        removeSpan.classList.add('quick-cart-product-remove');
        removeSpan.classList.add('remove');
        removeSpan.dataset.id = item.id;
        quickCart.appendChild(itemBlock)

    }

}

const thumbImages = document.getElementsByClassName('thumb-image');
const bigImage = document.getElementById('big-image');
let activeProduct = document.querySelector('.active');

Array.from(thumbImages).forEach(img => img.addEventListener('click', selectProduct));

function selectProduct(event) { 
  event.preventDefault();
  Array.from(thumbImages).forEach(img => img.classList.remove('active'));
  event.currentTarget.classList.add('active');
  activeProduct = event.currentTarget;
  bigImage.style.backgroundImage = `url(${event.currentTarget.getAttribute('href')})`;
}



 */


/* --------------------------------------------------------------------------------------------------------------------- */





// function createBasket() {
//     const quickCart = document.getElementById('quick-cart');
//     const cartLink = document.createElement('a');
//     quickCart.appendChild(cartLink);
//     cartLink.classList.add('cart-ico');
//     if (quickCart.firstElementChild === cartLink) cartLink.classList.add('open');
//     else cartLink.classList.remove('open');
//     cartLink.setAttribute('id', `quick-cart-pay`);
//     cartLink.setAttribute('quickbeam', "cart-pay");

//     const span = document.createElement('span');
//     cartLink.appendChild(span);

//     const strong = document.createElement('strong');
//     span.appendChild(strong);
//     strong.classList.add('quick-cart-text');
//     strong.innerHTML = 'Оформить заказ<br>';

//     const span2 = document.createElement('span');
//     span.appendChild(span2);
//     span2.setAttribute('id', `quick-cart-price`);
//     span2.textContent = '$800.00';
// }
























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