import { connect } from 'react-redux';

import Dialogues from './Dialogues';

import { sendMessageAC, updateMessageTextAC } from '../../store/actions/dialoguesPage';

const mapStateToProps = (state) => {
  return {
    dialoguesData: state.dialoguesPage.dialoguesData,
    messagesData: state.dialoguesPage.messagesData,
    messageText: state.dialoguesPage.messageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageAC()),
    updateMessageText: (text) => dispatch(updateMessageTextAC(text)),
  };
};

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);

export default DialoguesContainer;
