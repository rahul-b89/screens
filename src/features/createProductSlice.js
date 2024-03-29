import { createSlice } from "@reduxjs/toolkit";

const initialState={
    product:[],
};

export const orderSlice = createSlice({
    name:"Product",
    initialState,
    reducers:{
        addCreateProduct:(state,action)=>{
            if(action.payload){
                state.batch.push(action.payload);
                console.log("product",state.product);
            }
            else{
                console.log("data not received at reducer")
            }
        }
    }
})

export const {addCreateProduct}= orderSlice.actions;
export default orderSlice.reducer;