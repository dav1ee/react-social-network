import React from 'react';
import { NavLink } from 'react-router-dom';

import userIcon from '../../assets/images/user-icon.jpg';
import './Sidebar.scss';

const Sidebar = ({ navLinks, isAuth, login, logout }) => {
  return (
    <div className="sidebar">
      <div className="auth-block">
        {isAuth ? (
          <div className="auth-block__user">
            <img className="auth-block__user-avatar" src={userIcon} alt="User Icon" />
            <div className="auth-block__user-login">{login}</div>
            <button className="auth-block__user-logout" onClick={logout}>
              <i className="fas fa-sign-in-alt" />
            </button>
          </div>
        ) : (
          <div className="auth-block__login">
            <NavLink to="/login">Log In</NavLink>
          </div>
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
