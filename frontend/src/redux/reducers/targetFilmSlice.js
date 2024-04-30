import { createAction, createSlice, current } from '@reduxjs/toolkit'

let initialState = [];

export const targerFilmSlice = createSlice({
    name: 'targerFilm',
    initialState,
    reducers: {
        getInfo: (state, action) => {
            if (state != null) {
                state.pop()
            }
            state.push(action.payload)
            console.log('after', state)
        },
        deleteInfo: (state, action) => {
            state.pop()
        }
    }

})