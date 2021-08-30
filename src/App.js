import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import SidebarContainer from './components/Sidebar';
import Preloader from './components/Preloader';
import {
  ProfileContainer,
  DialoguesContainer,
  NewsFeed,
  UsersContainer,
  Music,
  Settings,
  Login,
} from './pages';

import { appInitialize } from './store/actions/app';

class App extends React.Component {
  componentDidMount() {
    this.props.appInitialize();
  }

  render() {
    return (
      <div className="app">
        <SidebarContainer />
        <div className="content">
          {this.props.isInitialized ? (
            <Switch>
              <Route path="/profile/:userId?">
                <ProfileContainer />
              </Route>
              <Route path="/dialogues">
                <DialoguesContainer />
              </Route>
              <Route path="/feed">
                <NewsFeed />
              </Route>
              <Route path="/users">
                <UsersContainer />
              </Route>
              <Route path="/music">
                <Music />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          ) : (
            <Preloader className="app-preloader" />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized,
});

export default compose(withRouter, connect(mapStateToProps, { appInitialize }))(App);
