import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    makeOrder: [], // Initialize as an empty array if you're planning to store multiple makeOrder objects
}

export const orderSlice = createSlice({
    name: "Make",
    initialState,
    reducers: {
        addMakeOrder: (state, action) => {
            const newMakeOrder = action.payload;
            state.makeOrder.push(newMakeOrder);
        }
    }
})

export const { addMakeOrder } = orderSlice.actions;
export default orderSlice.reducer;
