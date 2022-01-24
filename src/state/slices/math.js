import { createSlice } from "@reduxjs/toolkit";

export const mathSlice = createSlice({
    name: "math",
    initialState: "0",
    reducers: {
        addValue: (state, action) => parseFloat((parseFloat(state) + parseFloat(action.payload)).toPrecision(12)).toString(),
        multiplyValue: (state, action) => parseFloat((parseFloat(state) * parseFloat(action.payload)).toPrecision(12)).toString(),
        divideValue: (state, action) => parseFloat((parseFloat(state) / parseFloat(action.payload)).toPrecision(12)).toString(),
        clearValue: (state) => { return '0' },
        setValue: (state, action) => action.payload.toString()
    }
})
export const mathActions = mathSlice.actions;