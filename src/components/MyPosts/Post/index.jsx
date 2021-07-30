import React from 'react';

import './Post.scss';

const Post = ({ text }) => {
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
      <div className="post__text">{text}</div>
    </div>
  );
};

export default Post;
