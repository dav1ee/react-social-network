import React from 'react';

import userIcon from '../../../assets/images/user-icon.jpg';
import './Post.scss';

const Post = ({ id, fullName, photo, text, likes, comments, deletePost }) => {
  const onDeletePost = () => deletePost(id);

  return (
    <div className="post inner-block">
      <i onClick={onDeletePost} className="fas fa-times post__delete" />
      <div className="post__user">
        <img className="post__user-avatar" src={photo ? photo : userIcon} alt="User Avatar" />
        <div className="post__user-name">{fullName}</div>
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
