import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SidebarContainer from './components/Sidebar';
import { Profile, DialoguesContainer, NewsFeed, UsersContainer, Music, Settings } from './pages';

const App = () => {
  return (
    <div className="app">
      <SidebarContainer />
      <div className="content">
        <Redirect to="/users" />
        <Switch>
          <Route path="/profile">
            <Profile />
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
        </Switch>
      </div>
    </div>
  );
};

export default App;
