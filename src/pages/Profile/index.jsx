import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';

import {
  fetchUserProfile,
  fetchUserStatus,
  updateUserStatus,
  savePhoto,
  saveProfile,
} from '../../store/actions/profilePage';

class ProfileContainer extends React.Component {
  updateProfile() {
    const { authorizedUserId, fetchUserProfile, fetchUserStatus } = this.props;

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }

    fetchUserProfile(userId);
    fetchUserStatus(userId);
  }

  componentDidMount() {
    this.updateProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.updateProfile();
    }
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Profile
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateUserStatus}
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile}
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
  connect(mapStateToProps, {
    fetchUserProfile,
    fetchUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
)(ProfileContainer);
