import { configureStore } from '@reduxjs/toolkit';
import startReducer from '../reducers/startReducer';
import userReducer from '../reducers/userReducer';
import musicReducer from '../reducers/musicReducer';
export default configureStore({
    reducer: {
        start: startReducer,
        user: userReducer,
        music: musicReducer,
    },
});
