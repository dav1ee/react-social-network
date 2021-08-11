import React from 'react';

import Post from './Post';

import './MyPosts.scss';

const MyPosts = ({ fullName, photo, postsData, postText, createPost, updatePostText }) => {
  const onCreatePost = (e) => {
    e.preventDefault();
    if (!postText) return;

    createPost();
  };

  const onUpdatePostText = (e) => updatePostText(e.target.value);

  return (
    <>
      <div className="title">Create post:</div>
      <form className="create-post__form inner-block" style={{ padding: 5 }}>
        <textarea
          onChange={onUpdatePostText}
          value={postText}
          placeholder="Share with your friends"></textarea>
        <button onClick={onCreatePost}>
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
              fullName={fullName}
              photo={photo}
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
