import React from 'react';

import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Profile />
      </div>
    </div>
  );
};

export default App;
