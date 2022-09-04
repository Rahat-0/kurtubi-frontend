import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name : 'language',
    initialState :{language : ''},
    reducers : {
        languageAction : (state, action)=>{
            state.language = action.payload
        }
    }
})

export const {languageAction} = languageSlice.actions;

export default languageSlice.reducer;