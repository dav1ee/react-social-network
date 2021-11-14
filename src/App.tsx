import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

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

import { GlobalState } from './store';
import { appInitialize } from './store/actions/app';

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  appInitialize: () => void;
};

class App extends React.Component<MapPropsType & DispatchPropsType> {
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
              <Route path="/" exact>
                <Redirect to="/profile" />
              </Route>
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
              <Route path="*">
                <div className="not-found">404 Not found :(</div>
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

const mapStateToProps = (state: GlobalState) => ({
  isInitialized: state.app.isInitialized,
});

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { appInitialize }),
)(App);
