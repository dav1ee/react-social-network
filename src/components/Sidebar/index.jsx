import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li>
        <NavLink to="/profile">
          <i className="fas fa-user" />
          My profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dialogues">
          <i className="fas fa-envelope" />
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink to="/feed">
          <i className="fas fa-newspaper" />
          News feed
        </NavLink>
      </li>
      <li>
        <NavLink to="/users">
          <i className="fas fa-users" />
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/music">
          <i className="fas fa-music" />
          Music
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings">
          <i className="fas fa-cog" />
          Settings
        </NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
