import React from 'react';

import Status from './Status';
import Contacts from './Contacts';

import { ProfileType, ContactsType } from '../../types/types';

type PropsType = {
  isOwner: boolean;
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  onEditMode: () => void;
};

const MainInfo: React.FC<PropsType> = ({ isOwner, profile, status, updateStatus, onEditMode }) => {
  return (
    <>
      <div className="profile-main__info inner-block">
        <div className="profile-main__info-row">
          <div className="label">Name:</div>
          <div className="labeled">{profile.fullName}</div>
        </div>
        {status && <Status status={status} updateStatus={updateStatus} isOwner={isOwner} />}
        {profile.aboutMe && (
          <div className="profile-main__info-row">
            <div className="label">About me:</div>
            <div className="labeled">{profile.aboutMe}</div>
          </div>
        )}
        {profile.lookingForAJobDescription && (
          <div className="profile-main__info-row">
            <div className="label">Job description:</div>
            <div className="labeled">{profile.lookingForAJobDescription}</div>
          </div>
        )}
        {Object.keys(profile.contacts).map((key) => (
          <Contacts key={key} title={key} link={profile.contacts[key as keyof ContactsType]} />
        ))}
      </div>
      {isOwner && (
        <button onClick={onEditMode} className="profile-main__edit-btn">
          <i className="fas fa-pencil-alt" />
        </button>
      )}
    </>
  );
};

export default MainInfo;
