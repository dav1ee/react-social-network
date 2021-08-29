import { SEND_MESSAGE } from '../reducers/dialoguesPage';

export const sendMessage = (messageText) => ({
  type: SEND_MESSAGE,
  payload: messageText,
});
