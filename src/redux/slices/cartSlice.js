import {createSlice, createSelector} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addItem: function(state, action) {
            state.push(action.payload);
        }
    }
});

export const getItemsSelector = createSelector(state=>state.cart, state=>state);

export const {addItem} = cartSlice.actions;

export default cartSlice.reducer;