import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = ({ navLinks }) => {
  return (
    <ul className="sidebar">
      {navLinks &&
        navLinks.map((link) => (
          <li key={`${link.id}_${link.name}`}>
            <NavLink to={link.path}>
              <i className={link.icon} />
              {link.name}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default Sidebar;
