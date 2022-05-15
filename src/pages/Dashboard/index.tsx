import { ReactElement } from 'react';
import { useAppSelector } from '../../app/hooks';
import "./dashboardStyles.module.css";

const Dashboard = (): ReactElement => {
  const { user } = useAppSelector(state => state.auth);
  return (
    <h2>Welcome {user?.firstName}!</h2>
  );
};

export default Dashboard;