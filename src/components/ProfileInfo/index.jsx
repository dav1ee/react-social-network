import React from 'react';

import ProfileStatus from '../ProfileStatus';

import userIcon from '../../assets/images/user-icon.jpg';
import './ProfileInfo.scss';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  return (
    <div className="profile-main">
      <div className="profile-main__avatar inner-block">
        <img src={profile.photos.large ? profile.photos.large : userIcon} alt="User Avatar" />
      </div>
      <div className="profile-main__info inner-block">
        <div className="profile-main__info-row">
          <div className="label">Name:</div>
          <div className="labeled">{profile.fullName}</div>
        </div>
        <ProfileStatus status={status} updateStatus={updateStatus} />
        <div className="profile-main__info-row">
          <div className="label">Instagram:</div>
          <div className={`labeled ${profile.contacts.instagram ? 'labeled-link' : ''}`}>
            {profile.contacts.instagram ? profile.contacts.instagram : '-'}
          </div>
        </div>
        <div className="profile-main__info-row">
          <div className="label">VK:</div>
          <div className={`labeled ${profile.contacts.vk ? 'labeled-link' : ''}`}>
            {profile.contacts.vk ? profile.contacts.vk : '-'}
          </div>
        </div>
        <div className="profile-main__info-row">
          <div className="label">GitHub:</div>
          <div className={`labeled ${profile.contacts.github ? 'labeled-link' : ''}`}>
            {profile.contacts.github ? profile.contacts.github : '-'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
