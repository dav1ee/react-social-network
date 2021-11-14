import React from 'react';

import ProfileInfo from '../../components/ProfileInfo';
import MyPostsContainer from '../../components/MyPosts';
import Preloader from '../../components/Preloader';

import { ProfileType } from '../../types/types';

type PropsType = {
  isOwner: boolean;
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

const Profile: React.FC<PropsType> = ({
  isOwner,
  profile,
  status,
  updateStatus,
  savePhoto,
  saveProfile,
}) => {
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
