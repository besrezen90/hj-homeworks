'use strict'

let newList = document.querySelector(".contacts-list"),
    oldListItem = document.querySelector(".contacts-list > li");
newList.removeChild(oldListItem);


function parseNewContactList() {
    let newContactList = JSON.parse(loadContacts());
    newContactList.forEach(function (newContact) {
        let newListItem = document.createElement('li');
        newListItem.dataset.email = newContact.email;
        newListItem.dataset.phone = newContact.phone;
        newListItem.innerHTML = `<strong>${newContact.name}</strong>`;
        newList.appendChild(newListItem);
    })
}


document.addEventListener('DOMContentLoaded', parseNewContactList);