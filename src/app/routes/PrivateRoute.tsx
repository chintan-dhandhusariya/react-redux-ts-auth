import { Fragment, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store';

const PrivateRoute = ({ child, ...rest }: any): ReactElement => {
  const auth = useSelector((state: RootState) => state.auth);
  return auth.isUserLoggedIn ? <Fragment {...rest}>{child}</Fragment> : <Navigate to="/login" />;
};

export default PrivateRoute;