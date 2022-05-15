import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authRoutes, privateRoutes } from "./app/routes";
import PrivateRoute from './app/routes/PrivateRoute';
import AuthRoute from './app/routes/AuthRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {authRoutes.map(({ path, element }: any) => (
          <Route key={path} path={path} element={<AuthRoute child={element} />} />
        ))}
        {privateRoutes.map(({ path, element }: any) => (
          <Route key={path} path={path} element={<PrivateRoute child={element} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
