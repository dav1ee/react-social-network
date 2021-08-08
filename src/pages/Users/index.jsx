import { connect } from 'react-redux';

import Users from './Users';

import { setUsersAC, followUserAC, unfollowUserAC } from '../../store/actions/usersPage';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsersAC(users)),
    followUser: (userId) => dispatch(followUserAC(userId)),
    unfollowUser: (userId) => dispatch(unfollowUserAC(userId)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
