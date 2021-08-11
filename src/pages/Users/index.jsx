import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Users from './Users';

import {
  setUsers,
  followUser,
  unfollowUser,
  setCurrentPage,
  setUsersCount,
  setLoading,
} from '../../store/actions/usersPage';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setLoading(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then(({ data }) => {
        this.props.setUsers(data.items);
        this.props.setUsersCount(data.totalCount);
      })
      .finally(() => this.props.setLoading(false));
  }

  onSetCurrentPage = (pageNum) => {
    this.props.setLoading(true);
    this.props.setCurrentPage(pageNum);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`,
      )
      .then(({ data }) => this.props.setUsers(data.items))
      .finally(() => this.props.setLoading(false));
  };

  render() {
    return (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        usersCount={this.props.usersCount}
        currentPage={this.props.currentPage}
        isLoading={this.props.isLoading}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
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
});

export default connect(mapStateToProps, {
  setUsers,
  followUser,
  unfollowUser,
  setCurrentPage,
  setUsersCount,
  setLoading,
})(UsersContainer);
