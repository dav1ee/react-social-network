import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SidebarContainer from './components/Sidebar';
import {
  ProfileContainer,
  DialoguesContainer,
  NewsFeed,
  UsersContainer,
  Music,
  Settings,
  Login,
} from './pages';

const App = () => {
  return (
    <div className="app">
      <SidebarContainer />
      <div className="content">
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
      </div>
    </div>
  );
};

export default App;
