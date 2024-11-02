import { createSlice } from "@reduxjs/toolkit";

const filterSlices = createSlice({
    name: "filter",
    initialState: { filters: [] },
    reducers: {
        addFilter: (state, action) => {
            state.filters = action.payload.filters;

            localStorage.setItem("filters", action.payload.filters);
        },
    },
});
export const { addFilter } = filterSlices.actions;
export default filterSlices.reducer;