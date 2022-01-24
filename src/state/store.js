import { configureStore} from "@reduxjs/toolkit";
import { mathSlice } from "./slices/math";
import { operationSlice } from "./slices/operation";

const store = configureStore({
    reducer: {
        mathReducer: mathSlice.reducer,
        operationReducer: operationSlice.reducer
    }
});
export default store;