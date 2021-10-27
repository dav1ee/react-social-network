import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../store/actions/auth';

import LoginForm from '../../components/LoginForm';

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
    login(email, password, rememberMe, captcha);
  };

  if (isAuth) return <Redirect to="/profile" />;

  return (
    <div className="login-page" style={{ textAlign: 'center' }}>
      <div className="title">Authorization</div>
      <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
