import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Sidebar from './Sidebar';

import { setAuthUserData } from '../../store/actions/auth';

class SidebarContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then(({ data }) => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return (
      <Sidebar navLinks={this.props.navLinks} isAuth={this.props.isAuth} login={this.props.login} />
    );
  }
}

const mapStateToProps = (state) => ({
  navLinks: state.sidebar.navLinks,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(SidebarContainer);
