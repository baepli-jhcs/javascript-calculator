import { createSlice } from "@reduxjs/toolkit";

export const mathSlice = createSlice({
    name: "math",
    initialState: "0",
    reducers: {
        addValue: (state, action) => (parseFloat(state)+parseFloat(action.payload)).toString(),
        multiplyValue: (state, action) => (parseFloat(state)*parseFloat(action.payload)).toString(),
        divideValue: (state, action) => (parseFloat(state)/parseFloat(action.payload)).toString(),
        clearValue: (state) => {return '0'},
        setValue: (state, action) => action.payload.toString()
    }
})
export const mathActions = mathSlice.actions;