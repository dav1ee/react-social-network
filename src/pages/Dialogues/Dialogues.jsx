import React from 'react';

import DialogueItem from '../../components/DialogueItem';
import MessageItem from '../../components/MessageItem';
import AddMessageForm from '../../components/AddMessageForm';

import './Dialogues.scss';

const Dialogues = ({ dialoguesData, messagesData, sendMessage }) => {
  const onSendMessage = ({ messageText }) => sendMessage(messageText);

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
        <AddMessageForm onSubmit={onSendMessage} />
      </div>
    </div>
  );
};

export default Dialogues;
