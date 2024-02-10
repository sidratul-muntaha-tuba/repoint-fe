import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: "1",
	email: "2",
	name: "3",
};

export const loggedInUserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logInUserToApp: (state, action) => {
			state.id = action.payload.id;
			state.email = action.payload.email;
			state.name = action.payload.name;
		},
		logOutUserToApp: (state) => {
			state.id = "";
			state.email = "";
			state.name = "";
		},
	},
});

export const { logInUserToApp, logOutUserToApp } = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;
