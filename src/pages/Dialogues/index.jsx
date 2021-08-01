import React from 'react';

import DialogueItem from '../../components/DialogueItem';
import MessageItem from '../../components/MessageItem';

import './Dialogues.scss';

const Dialogues = ({ dialoguesPage }) => {
  const { dialoguesData, messagesData } = dialoguesPage;

  return (
    <div className="dialogues">
      <div className="dialogues-users inner-block">
        {dialoguesData &&
          dialoguesData.map((item) => (
            <DialogueItem key={`${item.id}_${item.name}`} id={item.id} name={item.name} />
          ))}
      </div>
      <div className="dialogues-messages">
        <div className="messages inner-block">
          {messagesData &&
            messagesData.map((item) => (
              <MessageItem key={`${item.id}_${item.message}`} message={item.message} />
            ))}
        </div>
        <form>
          <textarea placeholder="Type some text..."></textarea>
          <button>
            <i className="fas fa-plus" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialogues;
