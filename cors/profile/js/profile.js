'use strict';

function addScriptUser(url) {
    let script = document.createElement('script');
    script.async = true;
    script.src = url + '?&callback=creatUser';
    document.head.appendChild(script);
}

function creatUser(user) {
    document.querySelector('[data-name]').textContent = user.name;
    document.querySelector('[data-description]').textContent = user.description;
    document.querySelector('[data-pic]').setAttribute('src', user.pic)
    document.querySelector('[data-position]').textContent = user.position;

    addScriptSkills(`https://neto-api.herokuapp.com/profile/${user.id}/technologies`)

}

function addScriptSkills(url) {
    let script = document.createElement('script');
    script.async = true;
    script.src = url + '?&callback=creatUserSkills';
    document.head.appendChild(script);
}


function creatUserSkills(skills) {
    skills.forEach(element => {
        const newSkill = document.createElement('span');
        newSkill.classList.add('devicons');
        newSkill.classList.add(`devicons-${element}`);
        document.querySelector('[data-technologies]').appendChild(newSkill)
    });
    document.querySelector('.content').style.display = 'initial'
}


addScriptUser('https://neto-api.herokuapp.com/profile/me');

