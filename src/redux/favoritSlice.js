import { createSlice } from '@reduxjs/toolkit';

export const favoritSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoritItems: []
    },

    reducers: {
        addItemInFavoritItem: (state, action) => {
            state.favoritItems.push(action.payload)
        },
        removeItemInFavoritItem: (state, action) => {
            state.favoritItems = state.favoritItems.filter(favorit => favorit.id !== action.payload)
        },
    }
})

export const getFavoritItems = state => state.favorites.favoritItems;
export const { addItemInFavoritItem, removeItemInFavoritItem } = myTravelSlice.actions;
export default favoritSlice.reducer;