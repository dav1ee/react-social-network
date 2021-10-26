import React from 'react';

import userIcon from '../../assets/images/user-icon.jpg';

const Avatar = ({ isOwner, photos, savePhoto }) => {
  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className="profile-main__avatar inner-block">
      <img src={photos.large ? photos.large : userIcon} alt="User Avatar" />
      {isOwner && (
        <>
          <input type="file" id="input-file" onChange={onPhotoSelected} />
          <label htmlFor="input-file">
            <i className="far fa-image" />
            Choose a Photo
          </label>
        </>
      )}
    </div>
  );
};

export default Avatar;
