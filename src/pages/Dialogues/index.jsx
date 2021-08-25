import { compose } from 'redux';
import { connect } from 'react-redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogues from './Dialogues';

import { sendMessage, updateMessageText } from '../../store/actions/dialoguesPage';

const mapStateToProps = (state) => ({
  dialoguesData: state.dialoguesPage.dialoguesData,
  messagesData: state.dialoguesPage.messagesData,
  messageText: state.dialoguesPage.messageText,
});

export default compose(
  connect(mapStateToProps, { sendMessage, updateMessageText }),
  withAuthRedirect,
)(Dialogues);
