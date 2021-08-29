import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { required, maxLength } from '../../utils/formValidators';

import { withFormControls } from '../../hoc/withFormControls';

const Textarea = withFormControls('textarea');
const setMaxLength = maxLength(500);

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="create-post__form inner-block" style={{ padding: 5 }}>
      <Field
        component={Textarea}
        name="postText"
        placeholder="Share with your friends"
        validate={[required, setMaxLength]}
        className="create-post__form-textarea"
      />
      <button>
        Create
        <i className="fas fa-pencil-alt" />
      </button>
    </form>
  );
};

export default reduxForm({ form: 'profilePost' })(AddPostForm);
