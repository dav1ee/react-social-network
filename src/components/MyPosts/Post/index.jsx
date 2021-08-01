import React from 'react';

import './Post.scss';

const Post = ({ text, likes, comments }) => {
  return (
    <div className="post inner-block">
      <div className="post__user">
        <img
          className="post__user-avatar"
          src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
          alt="User Avatar"
        />
        <div className="post__user-name">Freddy Johansson</div>
      </div>
      <div className="post__body">{text}</div>
      <div className="post__footer">
        <div className="post__footer-item">
          <span>{likes}</span>
          <i className="fas fa-heart" />
        </div>
        <div className="post__footer-item">
          <span>{comments}</span>
          <i className="fas fa-comments" />
        </div>
      </div>
    </div>
  );
};

export default Post;
