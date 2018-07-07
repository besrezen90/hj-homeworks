/* Данный JS код */

// Регулируем видимость карточки
function toggleCardVisible() {
    document.getElementById('content').classList.toggle('hidden');
    document.getElementById('card').classList.toggle('hidden');
}


document.getElementById('close').addEventListener('click', toggleCardVisible);

document.getElementById('content').addEventListener('click', (event) => {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
        toggleCardVisible();
        document.getElementById('card-title').innerHTML = target.dataset.title;
        document.getElementById('card-author').innerHTML = target.dataset.author;
        document.getElementById('card-info').innerHTML = target.dataset.info;
        document.getElementById('card-price').innerHTML = target.dataset.price;
    }
});
// Запрос библиотеки

let content = document.getElementById("content"),
    oldContent = document.querySelector("#content li")

function parseNewBooktList() {
    content.removeChild(oldContent)
    let catalog = new XMLHttpRequest()
    catalog.addEventListener('load', onLoad)
    catalog.open("GET", "https://neto-api.herokuapp.com/book/")
    catalog.send()

    function onLoad() {
        let newCatalog = JSON.parse(catalog.responseText)
        newCatalog.forEach(function (newCatalogItem) {
            let newListItem = document.createElement('li');
            newListItem.dataset.title = newCatalogItem.title
            newListItem.dataset.author = newCatalogItem.author.name
            newListItem.dataset.info = newCatalogItem.info
            newListItem.dataset.price = newCatalogItem.price
            newListItem.innerHTML = `<img src=${newCatalogItem.cover.small}>`
            content.appendChild(newListItem)
        })
    }
}

document.addEventListener('DOMContentLoaded', parseNewBooktList);