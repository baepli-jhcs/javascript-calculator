import { createSlice } from "@reduxjs/toolkit";

export const operationSlice = createSlice({
    name: 'operation',
    initialState: [],
    reducers: {
        clearList: (state) => [],
        addList: (state, action) => {
            state.push({value: action.payload.value, type: action.payload.type});
        },
        changeList: (state, action) => {state[state.length - 1].value = action.payload},
    }
})
export const operationActions = operationSlice.actions;