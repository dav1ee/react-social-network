import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import Profile from './Profile';

import { fetchUserProfile } from '../../store/actions/profilePage';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
    this.props.fetchUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;

    return (
      <div style={{ position: 'relative' }}>
        <Profile profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { fetchUserProfile })(withRouter(ProfileContainer));
