export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const initialState = {
  dialoguesData: [
    { id: 1, name: 'Ervin Howell' },
    { id: 2, name: 'Clementine Bauch' },
    { id: 3, name: 'Patricia Lebsack' },
    { id: 4, name: 'Glenna Reichert' },
    { id: 5, name: 'Nicholas Runolfsdottir' },
    { id: 6, name: 'Kurtis Weissnat' },
  ],
  messagesData: [
    { id: 1, message: 'Dolor sit amet consectetur?' },
    {
      id: 2,
      message:
        'Amet consectetur adipisicing elit. Incidunt, repellendus. Odit, cupiditate eligendi.',
    },
    { id: 3, message: 'Repellendus.' },
  ],
  messageText: '',
};

export const dialoguesPage = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const newMessage = {
        id: Math.floor(Math.random() * 1000),
        message: state.messageText,
      };

      state.messagesData.push(newMessage);
      state.messageText = '';

      return state;
    }

    case UPDATE_MESSAGE_TEXT: {
      state.messageText = action.payload;

      return state;
    }

    default:
      return state;
  }
};
