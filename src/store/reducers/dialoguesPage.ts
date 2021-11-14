import { ActionsTypes } from '../actions/dialoguesPage';

import { DialogueType, MessageType } from '../../types/types';

const initialState = {
  dialoguesData: [
    { id: 1, name: 'Ervin Howell' },
    { id: 2, name: 'Clementine Bauch' },
    { id: 3, name: 'Patricia Lebsack' },
    { id: 4, name: 'Glenna Reichert' },
    { id: 5, name: 'Nicholas Runolfsdottir' },
    { id: 6, name: 'Kurtis Weissnat' },
  ] as Array<DialogueType>,
  messagesData: [
    { id: 1, message: 'Dolor sit amet consectetur?' },
    {
      id: 2,
      message:
        'Amet consectetur adipisicing elit. Incidunt, repellendus. Odit, cupiditate eligendi.',
    },
    { id: 3, message: 'Repellendus.' },
  ] as Array<MessageType>,
};

type InitialStateType = typeof initialState;

export const dialoguesPage = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      const newMessage = {
        id: Math.floor(Math.random() * 1000),
        message: action.payload,
      };

      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };

    default:
      return state;
  }
};
