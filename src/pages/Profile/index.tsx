import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Profile from './Profile';

import { GlobalState } from '../../store';
import { ProfileType } from '../../types/types';

import {
  fetchUserProfile,
  fetchUserStatus,
  updateUserStatus,
  savePhoto,
  saveProfile,
} from '../../store/actions/profilePage';

type MapStatePropsType = {
  profile: ProfileType | null;
  status: string;
  authorizedUserId: number | null;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  fetchUserProfile: (userId: number) => void;
  fetchUserStatus: (userId: number) => void;
  updateUserStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

type PathParamsType = { userId: string };

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {
  updateProfile() {
    const { authorizedUserId, fetchUserProfile, fetchUserStatus } = this.props;

    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }

    if (!userId) {
      console.error('User ID does not exist');
    } else {
      fetchUserProfile(userId);
      fetchUserStatus(userId);
    }
  }

  componentDidMount() {
    this.updateProfile();
  }

  componentDidUpdate(prevProps: PropsType) {
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

const mapStateToProps = (state: GlobalState): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    fetchUserProfile,
    fetchUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
)(ProfileContainer);
