import { configureStore } from '@reduxjs/toolkit';
import { targerFilmSlice } from './reducers/targetFilmSlice';
const store = configureStore({
    reducer: {
        getInfo: targerFilmSlice.reducer
    },
})

export default store