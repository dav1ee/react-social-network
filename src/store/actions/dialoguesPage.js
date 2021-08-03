import { SEND_MESSAGE, UPDATE_MESSAGE_TEXT } from '../reducers/dialoguesPage';

export const sendMessageAC = () => ({
  type: SEND_MESSAGE,
});

export const updateMessageTextAC = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  payload: text,
});
