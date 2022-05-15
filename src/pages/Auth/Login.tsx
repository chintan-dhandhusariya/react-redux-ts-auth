import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { loginAsync } from './authSlice';
import "./authStyles.css";

const Login = (): React.ReactElement => {

  const dispatch = useAppDispatch();

  const login = (e: any) => {
    e.preventDefault();
    dispatch(loginAsync({ type: "auth/login", password: "alohomora" }));
  };

  return (
    <div className="container">
      <button className="btn" onClick={login}>Log in</button>
    </div>
  );
};

export default Login;