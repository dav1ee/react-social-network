import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';

import { setUserProfile } from '../../store/actions/profilePage';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(({ data }) => this.props.setUserProfile(data));
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Profile profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
