import { configureStore } from "@reduxjs/toolkit";
import makeOrderReducer from "../features/makeOrderSlice";
import createOrderReducer from "../features/createOrderSlice";
import createBatchReducer from "../features/createBatchSlice";
import createProductReducer from "../features/createProductSlice"

export const store = configureStore({
    reducer: {
        order: makeOrderReducer,
        createOrder: createOrderReducer,
        createBatch: createBatchReducer,
        createProduct: createProductReducer
    }
});
