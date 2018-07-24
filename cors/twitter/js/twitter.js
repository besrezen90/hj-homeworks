'use strict';


function addScript(url) {
    let script = document.createElement('script');
    script.async = true;
    script.src = url + '?&callback=succsess';
    document.head.appendChild(script);
}

function succsess(data) {
    document.querySelector('[data-wallpaper]').setAttribute('src', data.wallpaper)
    document.querySelector('[data-username]').textContent = data.username;
    document.querySelector('[data-description]').textContent = data.description;
    document.querySelector('[data-pic]').setAttribute('src', data.pic)
    document.querySelector('[data-tweets]').value = data.tweets;
    document.querySelector('[data-followers]').value = data.followers;
    document.querySelector('[data-following]').value = data.following;
    
}

addScript('https://neto-api.herokuapp.com/twitter/jsonp');

