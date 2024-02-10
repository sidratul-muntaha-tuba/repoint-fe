import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { authRoutes, unAuthRoutes } from "./routes";

const App = () => {
	const user = useSelector((state) => state.loggedInUser);
	const [routes, setRoutes] = useState(
		user.email && user.id ? authRoutes : unAuthRoutes
	);
	useEffect(() => {
		setRoutes(
			user.email.trim().length * user.id.trim().length
				? authRoutes
				: unAuthRoutes
		);
	}, [user]);
	const router = createBrowserRouter(routes);
	return <RouterProvider router={router} />;
};

export default App;
