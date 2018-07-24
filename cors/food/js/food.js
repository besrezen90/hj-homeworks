'use strict';
//рецепт
function addScriptRecipe(url) {
    let script = document.createElement('script');
    script.async = true;
    script.src = url + '?&callback=createRecipe';
    document.head.appendChild(script);
}

function createRecipe(recipe) {
    document.querySelector('[data-pic]').style.backgroundImage = `url(${recipe.pic})`;
    document.querySelector('[data-title]').textContent = recipe.title;
    document.querySelector('[data-ingredients]').textContent = recipe.ingredients.join(', ');
    addScriptRating(`https://neto-api.herokuapp.com/food/${recipe.id}/rating`);
    addScriptUsersList(`https://neto-api.herokuapp.com/food/${recipe.id}/consumers`);
}

addScriptRecipe('https://neto-api.herokuapp.com/food/42');

// рейтинг
function addScriptRating(url) {
    let script = document.createElement('script');
    script.async = true;
    script.src = url + '?&callback=createRating';
    document.head.appendChild(script);
}

function createRating(rating) {
    document.querySelector('[data-rating]').textContent = rating.rating.toFixed(2);
    document.querySelector('[data-star]').style.width = `${rating.rating * 10}%`;
    document.querySelector('[data-votes]').textContent = rating.votes + ' оценок';
}


// Пользователи
function addScriptUsersList(url) {
    let script = document.createElement('script');
    script.async = true;
    script.src = url + '?&callback=createUserList';
    document.head.appendChild(script);
}

function createUserList(users) {
    users.consumers.forEach(user => {
        let img = document.createElement('img');
        img.setAttribute('src', user.pic);
        img.setAttribute('title', user.name);
        document.querySelector('[data-consumers]').appendChild(img)
    });
    let span = document.createElement('span');
    span.textContent = users.total;
    document.querySelector('[data-consumers]').appendChild(span)
}