import { createSlice } from "@reduxjs/toolkit";

const initialState={
    batch:[{
   productName:"Paracetamol",
   storageLocation:"Delhi",
   batchId:"2e22",
   makeOrder:"eeee",
   expiryDate:"12-12-2012",
   quantity:"0",
   price:"0.0",
    }],
};

export const orderSlice = createSlice({
    name:"Batch",
    initialState,
    reducers:{
        addCreateBatch:(state,action)=>{
            if(action.payload){
                state.batch.push(action.payload);
                console.log("batch",state.batch);
            }
            else{
                console.log("data not received at reducer")
            }
        }
    }
})

export const {addCreateBatch}= orderSlice.actions;
export default orderSlice.reducer;