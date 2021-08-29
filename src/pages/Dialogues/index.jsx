import { compose } from 'redux';
import { connect } from 'react-redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogues from './Dialogues';

import { sendMessage } from '../../store/actions/dialoguesPage';

const mapStateToProps = (state) => ({
  dialoguesData: state.dialoguesPage.dialoguesData,
  messagesData: state.dialoguesPage.messagesData,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (messageText) => dispatch(sendMessage(messageText)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogues);
