import React, { ChangeEvent } from 'react';

import { PhotosType } from '../../types/types';

import userIcon from '../../assets/images/user-icon.jpg';

type PropsType = {
  isOwner: boolean;
  photos: PhotosType;
  savePhoto: (file: File) => void;
};

const Avatar: React.FC<PropsType> = ({ isOwner, photos, savePhoto }) => {
  const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
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
