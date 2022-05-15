import Login from "../../pages/Auth/Login";
import Dashboard from "../../pages/Dashboard";

export const authRoutes: any[] = [
	{
		path: "/login",
		element: <Login/>,
	},
];

export const privateRoutes: any[] = [
	{
		path: "/",
		element: <Dashboard/>,
	},
];