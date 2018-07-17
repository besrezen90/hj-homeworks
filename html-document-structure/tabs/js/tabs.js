'use strict'

function controlTabs(container) {
    let section = container.querySelector('.tabs-content'),
        articles = section.children,
        tabsNav = container.querySelector('.tabs-nav'),
        templateNav = tabsNav.querySelector('li');
    let a = templateNav.querySelector('a').outerHTML;
    tabsNav.removeChild(templateNav);

    for (let item of articles) {
        let newList = document.createElement('li')
        newList.innerHTML = a;
        newList.querySelector('a').classList.add(`${item.dataset.tabIcon}`);
        newList.querySelector('a').textContent = item.dataset.tabTitle;
        tabsNav.appendChild(newList)
    }
    const navi = tabsNav.querySelectorAll('li a')

    function openBlock(event) {
        for (let but of navi) {
            if (but !== event.target) but.classList.remove('ui-tabs-active')
        }
        event.target.classList.add('ui-tabs-active');
        Array.from(articles).forEach(function(item){
            item.classList.add('hidden');
            if(item.dataset.tabTitle === event.target.textContent) item.classList.remove('hidden')
        })
    }

    Array.from(navi).forEach(elem => elem.addEventListener('click', openBlock))
    navi[0].click();
}
const tabs = document.getElementById('tabs');

document.addEventListener('DOMContentLoaded', controlTabs(tabs));