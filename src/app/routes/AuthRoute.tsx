import React, { Fragment, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store';

const AuthRoute = ({ child, ...rest}: any): ReactElement => {
  const auth = useSelector((state: RootState) => state.auth);
  return auth.isUserLoggedIn ? <Navigate to="/" /> : <Fragment {...rest}>{child}</Fragment>;
};

export default AuthRoute;