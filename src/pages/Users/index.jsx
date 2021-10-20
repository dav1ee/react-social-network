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

class UsersContainer extends React.Component {
  componentDidMount() {
    const { fetchUsers, currentPage, pageSize } = this.props;
    fetchUsers(currentPage, pageSize);
  }

  onSetCurrentPage = (pageNum) => {
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

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  usersCount: getUsersCount(state),
  currentPage: getCurrentPage(state),
  isLoading: getIsLoading(state),
  followButtonDisabled: getFollowButtonDisabled(state),
});

export default compose(
  connect(mapStateToProps, {
    fetchUsers,
    follow,
    unfollow,
  }),
)(UsersContainer);
