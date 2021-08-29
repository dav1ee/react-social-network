import React from 'react';

import Post from './Post';
import AddPostForm from './AddPostForm';

import './MyPosts.scss';

const MyPosts = ({ fullName, photo, postsData, createPost }) => {
  const onCreatePost = ({ postText }) => createPost(postText);

  return (
    <>
      <div className="title">Create post:</div>
      <AddPostForm onSubmit={onCreatePost} />
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
