'use strict';

function showInfo(data) {
    document.querySelector('[data-wallpaper]').setAttribute('src', data.wallpaper)
    document.querySelector('[data-username]').textContent = data.username;
    document.querySelector('[data-description]').textContent = data.description;
    document.querySelector('[data-pic]').setAttribute('src', data.pic)
    document.querySelector('[data-tweets]').value = data.tweets;
    document.querySelector('[data-followers]').value = data.followers;
    document.querySelector('[data-following]').value = data.following;
}

function loadData(url) {

    const functionName = 'randNameFunc' + String((Math.random() * 10000).toFixed());
    return new Promise((done) => {
        window[functionName] = done;
        const script = document.createElement('script')
        script.src = `${url}?jsonp=${functionName}`
        document.body.appendChild(script);
    });
}

loadData('https://neto-api.herokuapp.com/twitter/jsonp')
    .then(showInfo)