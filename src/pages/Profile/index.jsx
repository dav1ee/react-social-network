import React from 'react';

import ProfileInfo from '../../components/ProfileInfo';
import MyPosts from '../../components/MyPosts';

const Profile = ({ profilePage, dispatch }) => {
  return (
    <>
      <div className="title">Freddy Johansson</div>
      <ProfileInfo />
      <MyPosts
        postsData={profilePage.postsData}
        postText={profilePage.postText}
        dispatch={dispatch}
      />
    </>
  );
};

export default Profile;
