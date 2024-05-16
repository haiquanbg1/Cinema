import { configureStore } from '@reduxjs/toolkit';
import { targetFilmSlice } from './reducers/targetFilmSlice';
const store = configureStore({
    reducer: {
        getInfo: targetFilmSlice.reducer
    },
})

export default store