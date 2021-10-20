import React from 'react';

import UserItem from '../../components/UserItem';
import Pagination from '../../components/Pagination';
import Preloader from '../../components/Preloader';

import './Users.scss';

const Users = ({
  users,
  pageSize,
  usersCount,
  currentPage,
  isLoading,
  followButtonDisabled,
  follow,
  unfollow,
  onSetCurrentPage,
}) => {
  return (
    <div className="users-page">
      <div className="users-page__inner">
        <div className="users-list">
          {isLoading ? (
            <Preloader className="users-list__preloader" />
          ) : (
            users &&
            users.map((user) => (
              <UserItem
                key={`${user.id}_${user.name}`}
                user={user}
                followButtonDisabled={followButtonDisabled}
                follow={follow}
                unfollow={unfollow}
              />
            ))
          )}
        </div>
      </div>
      <Pagination
        pageSize={pageSize}
        itemsCount={usersCount}
        currentPage={currentPage}
        onSetCurrentPage={onSetCurrentPage}
      />
    </div>
  );
};

export default Users;
