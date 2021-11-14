import React from 'react';

import Post from './Post';
import AddPostForm from './AddPostForm';

import { AddPostFormValuesType } from './AddPostForm';
import { MapStatePropsType, MapDispatchPropsType } from './';

import './MyPosts.scss';

const MyPosts: React.FC<MapStatePropsType & MapDispatchPropsType> = ({
  fullName,
  photo,
  postsData,
  createPost,
  deletePost,
  isOwner,
}) => {
  const onCreatePost = ({ postText }: AddPostFormValuesType) => createPost(postText);

  return (
    <>
      {isOwner && (
        <>
          <div className="title">Create post:</div>
          <AddPostForm onSubmit={onCreatePost} />
        </>
      )}
      {postsData.length !== 0 && <div className="title">Posts:</div>}
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
              isOwner={isOwner}
            />
          ))
        ) : (
          <h2 className="title" style={{ opacity: 0.25, textAlign: 'center' }}>
            No posts on this profile yet
          </h2>
        )}
      </div>
    </>
  );
};

export default MyPosts;
