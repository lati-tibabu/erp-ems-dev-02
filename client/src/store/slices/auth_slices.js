import { createSlice } from "@reduxjs/toolkit";

const authSlices = createSlice({
    name: "auth",
    initialState: { username: "anonymous", role: "none", token: "", data: {} },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.role = action.payload.role;
            state.token = action.payload.token;
            state.data = action.payload.data;

            localStorage.setItem("username", action.payload.username);
            localStorage.setItem("role", action.payload.role);
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("data", JSON.stringify(action.payload.data));
        },
        logout: (state) => {
            state.username = "anonymous";
            state.role = "none";
            state.token = "";
            state.data = {};

            localStorage.removeItem("username");
            localStorage.removeItem("role");
            localStorage.removeItem("token");
            localStorage.removeItem("data");
        },
    },
});

export const { login, logout, schoolLogin } = authSlices.actions;
export default authSlices.reducer;