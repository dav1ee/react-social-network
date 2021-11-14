import React from 'react';

import DialogueItem from '../../components/DialogueItem';
import MessageItem from '../../components/MessageItem';
import AddMessageForm from '../../components/AddMessageForm';

import { DialogueType, MessageType } from '../../types/types';
import './Dialogues.scss';

type PropsType = {
  dialoguesData: Array<DialogueType>;
  messagesData: Array<MessageType>;
  sendMessage: (messageText: string) => void;
};

export type AddMessageFormValuesType = {
  messageText: string;
};

const Dialogues: React.FC<PropsType> = ({ dialoguesData, messagesData, sendMessage }) => {
  const onSendMessage = ({ messageText }: AddMessageFormValuesType) => sendMessage(messageText);

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
