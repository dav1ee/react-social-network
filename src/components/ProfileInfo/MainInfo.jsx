import React from 'react';

import Status from './Status';
import Contacts from './Contacts';

const MainInfo = ({ isOwner, profile, status, updateStatus, onEditMode }) => {
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
          <Contacts key={key} title={key} link={profile.contacts[key]} />
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
