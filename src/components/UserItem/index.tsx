import React from 'react';
import { Link } from 'react-router-dom';

import { UserType } from '../../types/types';

import userIcon from '../../assets/images/user-icon.jpg';
import './UserItem.scss';

type PropsType = {
  user: UserType;
  followButtonDisabled: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

const UserItem: React.FC<PropsType> = ({ user, followButtonDisabled, follow, unfollow }) => {
  return (
    <div className="users-list__item inner-block">
      <div className="users-list__item-avatar">
        <img src={user.photos.small ? user.photos.small : userIcon} alt="User Avatar" />
      </div>
      <div className="users-list__item-info">
        <div className="users-list__item-info__name">{user.name}</div>
        {user.status ? <div className="users-list__item-info__status">{user.status}</div> : ''}
      </div>
      <div className="users-list__item-right">
        {user.followed ? (
          <button
            onClick={() => unfollow(user.id)}
            disabled={followButtonDisabled.some((id) => id === user.id)}>
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => follow(user.id)}
            disabled={followButtonDisabled.some((id) => id === user.id)}>
            Follow
          </button>
        )}
        <Link to={`/profile/${user.id}`}>View profile</Link>
      </div>
    </div>
  );
};

export default UserItem;
