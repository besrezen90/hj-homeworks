'use strict';

function showComments(list) {
  list.forEach(createCommentByJs);
}

function createCommentByJs(comment) {
  const commentsContainer = document.querySelector('.comments');

  const commentWrap = document.createElement('div');
  commentWrap.className = 'comment-wrap';

  const photo = document.createElement('div');
  photo.className = 'photo';
  photo.setAttribute('title', comment.author.name);

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.style = `background-image: url('${comment.author.pic}')`;

  const commentBlock = document.createElement('div');
  commentBlock.className = 'comment-block';

  const commentText = document.createElement('p');
  commentText.className = 'comment-text';
  commentText.innerText = comment.text;

  const bottomComment = document.createElement('div');
  bottomComment.className = 'bottom-comment';

  const commentDate = document.createElement('div');
  commentDate.className = 'comment-date';
  commentDate.innerText = new Date(comment.date).toLocaleString('ru-Ru');

  const commentActions = document.createElement('ul');
  commentActions.className = 'comment-actions';

  const complain = document.createElement('li');
  complain.className = 'complain';
  complain.innerText = 'Пожаловаться';

  const reply = document.createElement('li');
  reply.className = 'reply';
  reply.innerText = 'Ответить';

  commentsContainer.appendChild(commentWrap);
  commentWrap.appendChild(photo);
  commentWrap.appendChild(commentBlock);
  photo.appendChild(avatar);
  commentBlock.appendChild(commentText);
  commentBlock.appendChild(bottomComment);
  bottomComment.appendChild(commentDate);
  bottomComment.appendChild(commentActions);
  commentActions.appendChild(complain);
  commentActions.appendChild(reply);
}


fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);