import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { GlobalState } from '../store';

type PropsType = { isAuth: boolean };

export const withAuthRedirect = (Component: React.ComponentType) => {
  const RedirectComponent: React.FC<PropsType> = (props) => {
    const { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to="/login" />;

    return <Component {...restProps} />;
  };

  return connect(mapStateToProps)(RedirectComponent);
};

const mapStateToProps = (state: GlobalState) => ({
  isAuth: state.auth.isAuth,
});
