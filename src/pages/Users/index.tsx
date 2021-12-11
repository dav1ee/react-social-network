import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import UserItem from '../../components/UserItem';
import Pagination from '../../components/Pagination';
import Preloader from '../../components/Preloader';
import UsersSearchForm from '../../components/UsersSearchForm';

import { fetchUsers, follow, unfollow } from '../../store/actions/usersPage';
import {
  getUsers,
  getUsersCount,
  getCurrentPage,
  getPageSize,
  getIsLoading,
  getFollowButtonDisabled,
  getFilter,
} from '../../store/selectors/users';

import { FilterType } from '../../store/reducers/usersPage';
import './Users.scss';

type QueryParamsType = {
  term?: string;
  page?: string;
  friend?: string;
};

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const users = useSelector(getUsers);
  const usersCount = useSelector(getUsersCount);
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const isLoading = useSelector(getIsLoading);
  const followButtonDisabled = useSelector(getFollowButtonDisabled);
  const filter = useSelector(getFilter);

  const onFollow = (userId: number) => dispatch(follow(userId));
  const onUnfollow = (userId: number) => dispatch(unfollow(userId));

  const onSetCurrentPage = (pageNum: number) => {
    dispatch(fetchUsers(pageNum, pageSize, filter));
  };

  const onSetFilter = (filter: FilterType) => {
    dispatch(fetchUsers(1, pageSize, filter));
  };

  React.useEffect(() => {
    const parsed = queryString.parse(history.location.search) as QueryParamsType;

    let actualPage = currentPage;
    let actualFilter = filter;

    if (parsed.page) actualPage = Number(parsed.page);
    if (parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };

    switch (parsed.friend) {
      case 'null':
        actualFilter = { ...actualFilter, friend: null };
        break;

      case 'true':
        actualFilter = { ...actualFilter, friend: true };
        break;

      case 'false':
        actualFilter = { ...actualFilter, friend: false };
        break;
    }

    dispatch(fetchUsers(actualPage, pageSize, actualFilter));
  }, []);

  React.useEffect(() => {
    const query: QueryParamsType = {};

    if (filter.term) query.term = filter.term;
    if (filter.friend !== null) query.friend = String(filter.friend);
    if (currentPage !== 1) query.page = String(currentPage);

    history.push({
      pathname: '/users',
      search: queryString.stringify(query),
    });
  }, [history, filter, currentPage]);

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
                onFollow={onFollow}
                onUnfollow={onUnfollow}
              />
            ))
          )}
        </div>
        <div className="users-searchbar inner-block">
          <UsersSearchForm onSetFilter={onSetFilter} />
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
