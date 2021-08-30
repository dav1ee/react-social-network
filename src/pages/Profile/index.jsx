import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';

import {
  fetchUserProfile,
  fetchUserStatus,
  updateUserStatus,
} from '../../store/actions/profilePage';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }

    this.props.fetchUserProfile(userId);
    this.props.fetchUserStatus(userId);
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Profile
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateUserStatus}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { fetchUserProfile, fetchUserStatus, updateUserStatus }),
  withRouter,
)(ProfileContainer);
