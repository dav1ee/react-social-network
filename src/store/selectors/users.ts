import { createSelector } from 'reselect';

import { GlobalState } from '../';

const getUsersSelector = (state: GlobalState) => state.usersPage.users;

export const getUsers = createSelector(getUsersSelector, (users) => {
  // reselect. study test
  return users.filter((user) => true);
});

export const getPageSize = (state: GlobalState) => state.usersPage.pageSize;
export const getUsersCount = (state: GlobalState) => state.usersPage.usersCount;
export const getCurrentPage = (state: GlobalState) => state.usersPage.currentPage;
export const getIsLoading = (state: GlobalState) => state.usersPage.isLoading;
export const getFollowButtonDisabled = (state: GlobalState) => state.usersPage.followButtonDisabled;
export const getFilter = (state: GlobalState) => state.usersPage.filter;
