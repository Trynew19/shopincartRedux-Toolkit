import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addcart:((state,action) => {
            state.push(action.payload)
        }),
        removecart:((state,action) => {
            return state.filter(item => item.id !== action.payload.id);
        })
    }
});

export const getItemsSelector = createSelector(
    (state) => state.cart,
    (state) => state
);

export const { addcart, removecart } = cartslice.actions;
export default cartslice.reducer;
