import React from 'react';
import { NavLink } from 'react-router-dom';

import './DialogueItem.scss';

const DialogueItem = ({ id, name }) => {
  return (
    <NavLink to={`/dialogues/${id}`} className="dialogues-users__item">
      <img
        className="dialogues-users__item-avatar"
        src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
        alt="User Avatar"
      />
      <div className="dialogues-users__item-name">{name}</div>
    </NavLink>
  );
};

export default DialogueItem;
