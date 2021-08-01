import React from 'react';

import ProfileInfo from '../../components/ProfileInfo';
import MyPosts from '../../components/MyPosts';

const Profile = ({ profilePage }) => {
  return (
    <>
      <div className="title">Freddy Johansson</div>
      <ProfileInfo />
      <MyPosts postsData={profilePage.postsData} />
    </>
  );
};

export default Profile;
