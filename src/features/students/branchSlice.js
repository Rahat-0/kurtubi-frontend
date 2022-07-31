import { createSlice } from "@reduxjs/toolkit"
const branchSlich = createSlice({
    name : 'branch',
    initialState : {
        branch : 'tangail branch'
    },
    reducers : {
        setBranch : (state, action)=>{
            state.branch = action.payload
        }
    }
})

export const {setBranch} = branchSlich.actions;
export default branchSlich.reducer;