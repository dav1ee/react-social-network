import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Users from './Users';

import { fetchUsers, follow, unfollow } from '../../store/actions/usersPage';
import {
  getUsers,
  getPageSize,
  getUsersCount,
  getCurrentPage,
  getIsLoading,
  getFollowButtonDisabled,
} from '../../store/selectors/users';

import { UserType } from '../../types/types';
import { GlobalState } from '../../store';

type MapStatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  usersCount: number;
  currentPage: number;
  isLoading: boolean;
  followButtonDisabled: Array<number>;
};

type MapDispatchPropsType = {
  fetchUsers: (currentPage: number, pageSize: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

type OwnPropsType = {};

type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    const { fetchUsers, currentPage, pageSize } = this.props;
    fetchUsers(currentPage, pageSize);
  }

  onSetCurrentPage = (pageNum: number) => {
    const { fetchUsers, pageSize } = this.props;
    fetchUsers(pageNum, pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        usersCount={this.props.usersCount}
        currentPage={this.props.currentPage}
        isLoading={this.props.isLoading}
        followButtonDisabled={this.props.followButtonDisabled}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onSetCurrentPage={this.onSetCurrentPage}
      />
    );
  }
}

const mapStateToProps = (state: GlobalState): MapStatePropsType => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  usersCount: getUsersCount(state),
  currentPage: getCurrentPage(state),
  isLoading: getIsLoading(state),
  followButtonDisabled: getFollowButtonDisabled(state),
});

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, GlobalState>(mapStateToProps, {
    fetchUsers,
    follow,
    unfollow,
  }),
)(UsersContainer);
