import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { required, maxLength } from '../../utils/formValidators';

import { withFormControls } from '../../hoc/withFormControls';

const Textarea = withFormControls('textarea');
const setMaxLength = maxLength(150);

const AddMessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name="messageText"
        placeholder="Enter your message"
        validate={[required, setMaxLength]}
        className="messages-form__textarea"
      />
      <button>
        <i className="fas fa-plus" />
      </button>
    </form>
  );
};

export default reduxForm({ form: 'dialogueMessage' })(AddMessageForm);
