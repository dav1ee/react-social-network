import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Profile from './Profile';

import {
  fetchUserProfile,
  fetchUserStatus,
  updateUserStatus,
} from '../../store/actions/profilePage';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 18928;
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
});

export default compose(
  connect(mapStateToProps, { fetchUserProfile, fetchUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
