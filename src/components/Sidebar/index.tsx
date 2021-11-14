import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';

import { logout } from '../../store/actions/auth';

import { GlobalState } from '../../store';
import { NavLinksType } from '../../types/types';

export type MapStatePropsType = {
  navLinks: Array<NavLinksType>;
  isAuth: boolean;
  login: string | null;
};

export type MapDispatchPropsType = { logout: () => void };

class SidebarContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {
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

const mapStateToProps = (state: GlobalState): MapStatePropsType => ({
  navLinks: state.sidebar.navLinks,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, GlobalState>(mapStateToProps, {
  logout,
})(SidebarContainer);
