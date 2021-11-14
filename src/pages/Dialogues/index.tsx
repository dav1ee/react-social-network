import { compose } from 'redux';
import { connect } from 'react-redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogues from './Dialogues';

import { actionCreators } from '../../store/actions/dialoguesPage';

import { GlobalState } from '../../store';

const mapStateToProps = (state: GlobalState) => ({
  dialoguesData: state.dialoguesPage.dialoguesData,
  messagesData: state.dialoguesPage.messagesData,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { sendMessage: actionCreators.sendMessage }),
  withAuthRedirect,
)(Dialogues);
