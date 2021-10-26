import React from 'react';

import MainInfo from './MainInfo';
import EditInfo from './EditInfo';
import Avatar from './Avatar';

import './ProfileInfo.scss';

const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {
  const [editMode, setEditMode] = React.useState(false);

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => setEditMode(false));
  };

  return (
    <div className="profile-main">
      <Avatar isOwner={isOwner} photos={profile.photos} savePhoto={savePhoto} />
      {editMode ? (
        <EditInfo
          initialValues={profile}
          profile={profile}
          isOwner={isOwner}
          status={status}
          updateStatus={updateStatus}
          onSubmit={onSubmit}
        />
      ) : (
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
