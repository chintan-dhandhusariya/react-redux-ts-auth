import { ReactElement, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginAsync } from './authSlice';
import styles from "./authStyles.module.css";

const Login = (): ReactElement => {
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector(state => state.auth);

  const login = (e: any) => {
    e.preventDefault();
    dispatch(loginAsync({ type: "auth/login", password }));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={login}>
        <input
          type="password"
          className={styles["text-input"]}
          placeholder="Enter password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        {<div className={styles.error}>{error?.message}</div>}
        <button className={styles.btn} disabled={loading}>Log in</button>
      </form>
    </div>
  );
};

export default Login;