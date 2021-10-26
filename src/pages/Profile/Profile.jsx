import React from 'react';

import ProfileInfo from '../../components/ProfileInfo';
import MyPostsContainer from '../../components/MyPosts';
import Preloader from '../../components/Preloader';

const Profile = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {
  if (!profile) return <Preloader className="profile-main__preloader" />;

  return (
    <>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      <MyPostsContainer isOwner={isOwner} />
    </>
  );
};

export default Profile;
