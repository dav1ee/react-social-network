import React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';

import { required, maxLength } from '../../utils/formValidators';
import { createField } from '../../utils/formControls';

import { withFormControls } from '../../hoc/withFormControls';

const Textarea = withFormControls('textarea');
const setMaxLength = maxLength(500);

type PropsType = {};
export type AddPostFormValuesType = { postText: string };
type AddPostFormValuesTypeKeys = Extract<keyof AddPostFormValuesType, string>;

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = ({
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="create-post__form inner-block" style={{ padding: 5 }}>
      {createField<AddPostFormValuesTypeKeys>(
        Textarea,
        [required, setMaxLength],
        'postText',
        'text',
        'Share with your friends',
        'create-post__form-textarea',
      )}
      <button>
        Create
        <i className="fas fa-pencil-alt" />
      </button>
    </form>
  );
};

export default reduxForm<AddPostFormValuesType, PropsType>({ form: 'profilePost' })(AddPostForm);
