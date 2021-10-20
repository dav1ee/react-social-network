import { createSelector } from 'reselect';

const getUsersSelector = (state) => state.usersPage.users;
export const getUsers = createSelector(getUsersSelector, (users) => {
  // reselect. study test
  return users.filter((user) => true);
});

export const getPageSize = (state) => state.usersPage.pageSize;
export const getUsersCount = (state) => state.usersPage.usersCount;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getIsLoading = (state) => state.usersPage.isLoading;
export const getFollowButtonDisabled = (state) => state.usersPage.followButtonDisabled;
