import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../store/actions/auth';

import LoginForm from '../../components/LoginForm';

import { GlobalState } from '../../store';
import { LoginFormValuesType } from '../../components/LoginForm';

type MapStatePropsType = {
  isAuth: boolean;
  captchaUrl: string | null | undefined;
};

type MapDispatchPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null | undefined,
  ) => void;
};

type OwnPropsType = {};

type LoginPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const Login: React.FC<LoginPropsType> = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = ({ email, password, rememberMe, captcha }: LoginFormValuesType) => {
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

const mapStateToProps = (state: GlobalState): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
