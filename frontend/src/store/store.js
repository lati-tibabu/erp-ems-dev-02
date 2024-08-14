import { configureStore } from "@reduxjs/toolkit";
import auth_slices from "./slices/auth_slices";

//store confs

const store = configureStore({
    reducer: {
        auth: auth_slices,
    },
});

export default store;