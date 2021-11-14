import React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';

import { required } from '../../utils/formValidators';
import { withFormControls } from '../../hoc/withFormControls';
import { createField } from '../../utils/formControls';

import './LoginForm.scss';

const Input = withFormControls('input');

type PropsType = {
  captchaUrl: string | null | undefined;
};

export type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null | undefined;
};

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>;

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, PropsType> & PropsType> = ({
  handleSubmit,
  error,
  captchaUrl,
}) => {
  return (
    <>
      <form className="login-form inner-block" onSubmit={handleSubmit}>
        {createField<LoginFormValuesTypeKeys>(
          Input,
          [required],
          'email',
          'text',
          'Email',
          'login-form__input',
        )}
        {createField<LoginFormValuesTypeKeys>(
          Input,
          [required],
          'password',
          'password',
          'Password',
          'login-form__input',
        )}
        {createField<LoginFormValuesTypeKeys>(
          'input',
          [],
          'rememberMe',
          'checkbox',
          null,
          'login-form__check',
          '',
          'Remember Me',
        )}
        <div className="login-form__button">
          <button>Log In</button>
        </div>
      </form>
      {error && <div className="login-form__error">{error}</div>}
      <div className="captcha-block">
        {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
        {captchaUrl &&
          createField<LoginFormValuesTypeKeys>(
            Input,
            [required],
            'captcha',
            'text',
            'Enter text...',
            null,
            'captcha-block__input',
          )}
      </div>
    </>
  );
};

export default reduxForm<LoginFormValuesType, PropsType>({ form: 'login' })(LoginForm);
