import React from "react";
import Login from "./pages/Auth/Login";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

export const routes = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "*",
		element: <Error />,
	},
];
