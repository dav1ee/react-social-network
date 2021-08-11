import { SEND_MESSAGE, UPDATE_MESSAGE_TEXT } from '../reducers/dialoguesPage';

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const updateMessageText = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  payload: text,
});
