import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';

import { fetchAuthUserData, logout } from '../../store/actions/auth';

class SidebarContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAuthUserData();
  }

  render() {
    return (
      <Sidebar
        navLinks={this.props.navLinks}
        isAuth={this.props.isAuth}
        login={this.props.login}
        logout={this.props.logout}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  navLinks: state.sidebar.navLinks,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { fetchAuthUserData, logout })(SidebarContainer);
