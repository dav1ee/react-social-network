import React from 'react';

import Post from './Post';

import './MyPosts.scss';

const MyPosts = ({ postsData }) => {
  return (
    <>
      <div className="title">Create post:</div>
      <form className="create-post__form inner-block">
        <textarea placeholder="Share with your friends"></textarea>
        <button>
          Create
          <i className="fas fa-pencil-alt" />
        </button>
      </form>
      <div className="title">My posts:</div>
      <div className="posts">
        {postsData &&
          postsData.map((item) => (
            <Post
              key={`${item.id}_${item.text}`}
              text={item.text}
              likes={item.likes}
              comments={item.comments}
            />
          ))}
      </div>
    </>
  );
};

export default MyPosts;
