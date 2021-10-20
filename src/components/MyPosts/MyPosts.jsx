import React from 'react';

import Post from './Post';
import AddPostForm from './AddPostForm';

import './MyPosts.scss';

const MyPosts = ({ fullName, photo, postsData, createPost, deletePost }) => {
  const onCreatePost = ({ postText }) => createPost(postText);

  return (
    <>
      <div className="title">Create post:</div>
      <AddPostForm onSubmit={onCreatePost} />
      {postsData.length !== 0 && <div className="title">My posts:</div>}
      <div className="posts">
        {postsData.length !== 0 ? (
          postsData.map((item) => (
            <Post
              key={`${item.id}_${item.text}`}
              id={item.id}
              fullName={fullName}
              photo={photo}
              text={item.text}
              likes={item.likes}
              comments={item.comments}
              deletePost={deletePost}
            />
          ))
        ) : (
          <h2 className="title" style={{ opacity: 0.25, textAlign: 'center' }}>
            No posts on your profile yet
          </h2>
        )}
      </div>
    </>
  );
};

export default MyPosts;
