import React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';

import { withFormControls } from '../../hoc/withFormControls';
import { createField } from '../../utils/formControls';
import { AddMessageFormValuesType } from '../../pages/Dialogues/Dialogues';

import { required, maxLength } from '../../utils/formValidators';

const Textarea = withFormControls('textarea');
const setMaxLength = maxLength(150);

type AddMessageFormTypeKeys = Extract<keyof AddMessageFormValuesType, string>;

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormValuesType>> = ({
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<AddMessageFormTypeKeys>(
        Textarea,
        [required, setMaxLength],
        'messageText',
        'text',
        'Enter your message',
        'messages-form__textarea',
      )}
      <button>
        <i className="fas fa-plus" />
      </button>
    </form>
  );
};

export default reduxForm<AddMessageFormValuesType>({ form: 'dialogueMessage' })(AddMessageForm);
