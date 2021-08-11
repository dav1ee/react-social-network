import React from 'react';

import ProfileInfo from '../../components/ProfileInfo';
import MyPostsContainer from '../../components/MyPosts';
import Preloader from '../../components/Preloader';

const Profile = ({ profile }) => {
  if (!profile) return <Preloader className="profile-main__preloader" />;

  return (
    <>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
