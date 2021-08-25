import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Users from './Users';

import { fetchUsers, follow, unfollow } from '../../store/actions/usersPage';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.currentPage, this.props.pageSize);
  }

  onSetCurrentPage = (pageNum) => {
    this.props.fetchUsers(pageNum, this.props.pageSize);
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
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  usersCount: state.usersPage.usersCount,
  currentPage: state.usersPage.currentPage,
  isLoading: state.usersPage.isLoading,
  followButtonDisabled: state.usersPage.followButtonDisabled,
});

export default compose(
  connect(mapStateToProps, {
    fetchUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect,
)(UsersContainer);
