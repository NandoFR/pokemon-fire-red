import { createSlice } from '@reduxjs/toolkit';

export const startReducer = createSlice({
    name: 'start',
    initialState: {
        isAppStarted: false,
    },
    reducers: {
        startApp: (state) => {
            state.isAppStarted = true;
        },
    },
});

export const { startApp } = startReducer.actions;

export default startReducer.reducer;
