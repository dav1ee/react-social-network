import { connect } from 'react-redux';

import Dialogues from './Dialogues';

import { sendMessage, updateMessageText } from '../../store/actions/dialoguesPage';

const mapStateToProps = (state) => ({
  dialoguesData: state.dialoguesPage.dialoguesData,
  messagesData: state.dialoguesPage.messagesData,
  messageText: state.dialoguesPage.messageText,
  isAuth: state.auth.isAuth,
});

const DialoguesContainer = connect(mapStateToProps, { sendMessage, updateMessageText })(Dialogues);

export default DialoguesContainer;
