import React from 'react';

import ProfileInfo from '../../components/ProfileInfo';
import MyPostsContainer from '../../components/MyPosts';

const Profile = () => {
  return (
    <>
      <div className="title">Freddy Johansson</div>
      <ProfileInfo />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
