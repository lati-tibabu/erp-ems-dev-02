import { createSlice } from "@reduxjs/toolkit";

const authSlices = createSlice({
    name: "auth",
    initialState: { username: "anonymous", role: "none", token: "" },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.role = action.payload.role;
            state.token = action.payload.token;

            localStorage.setItem("username", action.payload.username);
            localStorage.setItem("role", action.payload.role);
            localStorage.setItem("token", action.payload.token);
        },
        logout: (state) => {
            state.username = "anonymous";
            state.role = "none";
            state.token = "";

            localStorage.removeItem("username");
            localStorage.removeItem("role");
            localStorage.removeItem("token");
        },
    },
});

export const { login, logout } = authSlices.actions;
export default authSlices.reducer;