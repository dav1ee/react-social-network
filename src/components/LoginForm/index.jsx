import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { required } from '../../utils/formValidators';
import { withFormControls } from '../../hoc/withFormControls';

import './LoginForm.scss';

const Input = withFormControls('input');

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <>
      <form className="login-form inner-block" onSubmit={handleSubmit}>
        <Field
          component={Input}
          validate={[required]}
          name="email"
          type="text"
          placeholder="Email"
          className="login-form__input"
        />
        <Field
          component={Input}
          validate={[required]}
          name="password"
          type="password"
          placeholder="Password"
          className="login-form__input"
        />
        <div>
          <Field
            component="input"
            name="rememberMe"
            type="checkbox"
            className="login-form__check"
          />
          Remember me
        </div>
        <div className="login-form__button">
          <button>Log In</button>
        </div>
      </form>
      {error && <div className="login-form__error">{error}</div>}
    </>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
