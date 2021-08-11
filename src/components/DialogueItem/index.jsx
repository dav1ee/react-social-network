import React from 'react';
import { NavLink } from 'react-router-dom';

import userIcon from '../../assets/images/user-icon.jpg';
import './DialogueItem.scss';

const DialogueItem = ({ id, name }) => {
  return (
    <NavLink to={`/dialogues/${id}`} className="dialogues-users__item">
      <img className="dialogues-users__item-avatar" src={userIcon} alt="User Avatar" />
      <div className="dialogues-users__item-name">{name}</div>
    </NavLink>
  );
};

export default DialogueItem;
