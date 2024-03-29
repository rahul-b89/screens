import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [{
    receivedDate:"09-03-2024",
    orderLocation:"India",
    orderNote:"This field is empty",
    name:"Rahul",
    code:"1234",
    quantity:"3",
    price:"12345",
    customerName:"Rahul",
    email:"rahul@gmail.com",
    mobileNumber:"1234567890",
    customerAddress:"MG Road",
    
  }],
};

export const orderSlice = createSlice({
  name: "Orders",
  initialState,
  reducers: {
    addCreateOrder: (state, action) => {
      if (action.payload) {
        state.orders.push(action.payload);
        console.log("orders", state.orders);
      } else {
        console.log("data not received at reducer");
      }
    },
  },
});

export const { addCreateOrder } = orderSlice.actions;

export default orderSlice.reducer;
