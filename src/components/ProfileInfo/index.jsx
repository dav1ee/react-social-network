import React from 'react';

import './ProfileInfo.scss';

const ProfileInfo = () => {
  return (
    <div className="profile-main">
      <div className="profile-main__avatar inner-block">
        <img
          src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
          alt="User Avatar"
        />
      </div>
      <div className="profile-main__info inner-block">
        <div className="profile-main__info-row">
          <div className="label">Country:</div>
          <div className="labeled">Sweden</div>
        </div>
        <div className="profile-main__info-row">
          <div className="label">City:</div>
          <div className="labeled">Stockholm</div>
        </div>
        <div className="profile-main__info-row">
          <div className="label">Age:</div>
          <div className="labeled">27</div>
        </div>
        <div className="profile-main__info-row">
          <div className="label">Friends:</div>
          <div className="labeled">100</div>
        </div>
        <div className="profile-main__info-row">
          <div className="label">Subscribers:</div>
          <div className="labeled">500</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
