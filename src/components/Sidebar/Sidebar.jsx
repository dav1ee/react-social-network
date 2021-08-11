import React from 'react';
import { NavLink } from 'react-router-dom';

import userIcon from '../../assets/images/user-icon.jpg';
import './Sidebar.scss';

const Sidebar = ({ navLinks, isAuth, login }) => {
  return (
    <div className="sidebar">
      <div className="auth-block">
        {isAuth ? (
          <div className="auth-block__user">
            <img className="auth-block__user-avatar" src={userIcon} alt="User Icon" />
            <div className="auth-block__user-login">{login}</div>
          </div>
        ) : (
          <NavLink to="/login">
            Log In
            <i className="fas fa-sign-in-alt" />
          </NavLink>
        )}
      </div>
      <ul>
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
    </div>
  );
};

export default Sidebar;
