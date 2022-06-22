import { createSlice } from '@reduxjs/toolkit';

export const musicReducer = createSlice({
    name: 'music',
    initialState: {
        track: false,
        isPlaying: false,
        volume: 1,
    },
    reducers: {
        playMusic: (state) => {
            if (state.track) {
                state.isPlaying = true;
            }
        },
        setMusic: (state, action) => {
            state.track = action.payload;
        },
        pauseMusic: (state) => {
            if (state.track) {
                state.isPlaying = false;
            }
        },
        volumeMusic: (state, action) => {
            if (state.track) {
                state.volume = action.payload;
            }
        },
        muteMusic: (state) => {
            if (state.track) {
                state.volume = 0;
            }
        },
    },
});

export const { playMusic, setMusic, pauseMusic, muteMusic, volumeMusic } =
    musicReducer.actions;

export default musicReducer.reducer;
