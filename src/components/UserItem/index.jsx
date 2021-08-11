import React from 'react';
import { Link } from 'react-router-dom';

import userIcon from '../../assets/images/user-icon.jpg';
import './UserItem.scss';

const UserItem = ({ user, followUser, unfollowUser }) => {
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
          <button onClick={() => unfollowUser(user.id)}>Unfollow</button>
        ) : (
          <button onClick={() => followUser(user.id)}>Follow</button>
        )}
        <Link to={`/profile/${user.id}`}>View profile</Link>
      </div>
    </div>
  );
};

export default UserItem;
