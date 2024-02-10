import React from "react";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

export const authRoutes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "*",
		element: <Error />,
	},
];

export const unAuthRoutes = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "*",
		element: <Error />,
	},
];
