import { configureStore } from "@reduxjs/toolkit";
import auth_slices from "./slices/auth_slices";
import filter_slices from "./slices/filter_slices";

//store confs

const store = configureStore({
  reducer: {
    auth: auth_slices,
    filter: filter_slices,
  },
});

export default store;
