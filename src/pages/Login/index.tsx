import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';

import { login } from '../../store/actions/auth';
import { GlobalState } from '../../store';
import { LoginFormValuesType } from '../../components/LoginForm';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: GlobalState) => state.auth.isAuth);
  const captchaUrl = useSelector((state: GlobalState) => state.auth.captchaUrl);

  const onSubmit = ({ email, password, rememberMe, captcha }: LoginFormValuesType) => {
    dispatch(login(email, password, rememberMe, captcha));
  };

  if (isAuth) return <Redirect to="/profile" />;

  return (
    <div className="login-page" style={{ textAlign: 'center' }}>
      <div className="title">Authorization</div>
      <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

export default LoginPage;
