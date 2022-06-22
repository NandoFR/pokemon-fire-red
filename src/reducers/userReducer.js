import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
    name: 'user',
    initialState: {
        isLogged: false,
        name: null,
        gender: null,
    },
    reducers: {
        login: (state) => {
            state.isLogged = true;
        },
        createCharacter: (state, action) => {
            state.name = action.payload.name;
            state.gender = action.payload.gender;
        },
    },
});

export const { login, createCharacter } = userReducer.actions;

export default userReducer.reducer;
