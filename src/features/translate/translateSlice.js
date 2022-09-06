import { createSlice } from "@reduxjs/toolkit";

const translateSlice = createSlice({
    name : 'language',
    initialState :{language : 'EN'},
    reducers : {
        translateAction : (state, action)=>{
            state.language = action.payload
        }
    }
})

export const {translateAction} = translateSlice.actions;

export default translateSlice.reducer;