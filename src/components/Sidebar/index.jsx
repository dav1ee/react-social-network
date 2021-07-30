import React from 'react';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li>
        <a href="/" className="active">
          <i className="fas fa-user" /> My profile
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fas fa-comments" />
          Messages
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fas fa-newspaper" />
          News
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fas fa-users" />
          Users
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fas fa-music" />
          Music
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fas fa-cog" />
          Settings
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
