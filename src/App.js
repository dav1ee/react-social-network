import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import { Profile, Dialogues, NewsFeed, Users, Music, Settings } from './pages';

const App = ({ state, dispatch }) => {
  return (
    <div className="app">
      <Sidebar data={state.sidebar} />
      <div className="content">
        <Redirect to="/profile" />
        <Switch>
          <Route path="/profile">
            <Profile profilePage={state.profilePage} dispatch={dispatch} />
          </Route>
          <Route path="/dialogues">
            <Dialogues dialoguesPage={state.dialoguesPage} dispatch={dispatch} />
          </Route>
          <Route path="/feed">
            <NewsFeed />
          </Route>
          <Route path="/users">
            <Users />
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
