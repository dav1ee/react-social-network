import React from 'react';
import { Redirect } from 'react-router-dom';

import DialogueItem from '../../components/DialogueItem';
import MessageItem from '../../components/MessageItem';

import './Dialogues.scss';

const Dialogues = ({
  dialoguesData,
  messagesData,
  messageText,
  sendMessage,
  updateMessageText,
  isAuth,
}) => {
  const onSendMessage = (e) => {
    e.preventDefault();
    if (!messageText) return;

    sendMessage();
  };

  const onUpdateMessageText = (e) => updateMessageText(e.target.value);

  if (!isAuth) return <Redirect to="/login" />;

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
          <textarea
            onChange={onUpdateMessageText}
            value={messageText}
            placeholder="Enter your message"></textarea>
          <button onClick={onSendMessage}>
            <i className="fas fa-plus" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialogues;
