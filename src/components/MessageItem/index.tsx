import React from 'react';

type PropsType = { message: string };

const MessageItem: React.FC<PropsType> = ({ message }) => {
  return <div className="messages-item">{message}</div>;
};

export default MessageItem;
