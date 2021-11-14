import React from 'react';

import MainInfo from './MainInfo';
import EditInfo from './EditInfo';
import Avatar from './Avatar';

import { ProfileType } from '../../types/types';

import './ProfileInfo.scss';

type PropsType = {
  isOwner: boolean;
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

const ProfileInfo: React.FC<PropsType> = ({
  isOwner,
  profile,
  status,
  updateStatus,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = React.useState(false);

  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData).then(() => setEditMode(false));
  };

  return (
    <div className="profile-main">
      {profile && <Avatar isOwner={isOwner} photos={profile.photos} savePhoto={savePhoto} />}
      {editMode
        ? profile && (
            <EditInfo
              initialValues={profile}
              profile={profile}
              isOwner={isOwner}
              status={status}
              updateStatus={updateStatus}
              onSubmit={onSubmit}
            />
          )
        : profile && (
            <MainInfo
              isOwner={isOwner}
              profile={profile}
              status={status}
              updateStatus={updateStatus}
              onEditMode={() => setEditMode(true)}
            />
          )}
    </div>
  );
};

export default ProfileInfo;
