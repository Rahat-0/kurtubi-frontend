import { createSlice } from "@reduxjs/toolkit"

const refreshSlice = createSlice({
    name : 'refresh',
    initialState : {refresh : false},
     
    reducers : {
        doRefresh : (state)=>{
            state.refresh = !state.refresh
        }
    }

})

export const {doRefresh} = refreshSlice.actions;

export default refreshSlice.reducer;