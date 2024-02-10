import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter/counterSlice";
import loggedInUserReducer from "./reducers/loggedInUser/loggedInUserSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		loggedInUser: loggedInUserReducer,
	},
});
