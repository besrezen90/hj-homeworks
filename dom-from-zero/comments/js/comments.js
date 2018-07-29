'use strict';

function showComments(list) {
  const commentsContainer = document.querySelector(".comments");
  const commentNodes = list.map(createComment);
  const fragment = commentNodes.reduce((fragment, currentValue) => {
    fragment.appendChild(currentValue);
    return fragment;
  }, document.createDocumentFragment());

  commentsContainer.appendChild(fragment);
}

function createComment(comment) {
  const photo = document.createElement("div");
  photo.className = "photo";
  photo.setAttribute("title", comment.author.name);
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.style.backgroundImage = `url(${comment.author.pic})`;
  photo.appendChild(avatar);
  const commentWrap = document.createElement("div");
  commentWrap.className = "comment-wrap";

  commentWrap.appendChild(photo);

  const comm = document.createElement('div');
  comm.className = 'comment-block';

  const p = document.createElement('p');
  p.className = 'comment-text';
  console.log(comment.text.split('\n').join('<br>'))
  p.textContent = comment.text.split('\n').join(' ');

  comm.appendChild(p);

  const bottomComment = document.createElement('div');
  bottomComment.className = 'bottom-comment';

  const commentDate = document.createElement('div');
  commentDate.className = 'comment-date';
  commentDate.textContent = new Date(comment.date).toLocaleString('ru-Ru');
  bottomComment.appendChild(commentDate);

  const commentActions = document.createElement('ul');
  commentActions.className = 'comment-actions';

  const complain = document.createElement('li');
  complain.className = 'complain';
  complain.textContent = 'Пожаловаться';
  commentActions.appendChild(complain);

  const reply = document.createElement('li');
  reply.className = 'reply';
  reply.textContent = 'Ответить';
  commentActions.appendChild(reply);

  comm.appendChild(bottomComment);
  comm.appendChild(commentActions);

  commentWrap.appendChild(comm);
  return commentWrap;
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);