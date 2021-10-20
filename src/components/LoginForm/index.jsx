import React from 'react';
import { reduxForm } from 'redux-form';

import { required } from '../../utils/formValidators';
import { withFormControls } from '../../hoc/withFormControls';
import { createField } from '../../utils/formControls';

import './LoginForm.scss';

const Input = withFormControls('input');

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <>
      <form className="login-form inner-block" onSubmit={handleSubmit}>
        {createField(Input, [required], 'email', 'text', 'Email', 'login-form__input')}
        {createField(Input, [required], 'password', 'password', 'Password', 'login-form__input')}
        {createField(
          'input',
          [],
          'rememberMe',
          'checkbox',
          null,
          'login-form__check',
          'Remember Me',
        )}
        <div className="login-form__button">
          <button>Log In</button>
        </div>
      </form>
      {error && <div className="login-form__error">{error}</div>}
    </>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
