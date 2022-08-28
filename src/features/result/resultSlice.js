import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const resultAction = createAsyncThunk('result/all', async ({api, token})=>{
    const res = await axios.get(api, {headers : token})
    return res.data.result
})

const resultSlice = createSlice({
    name : 'result',
    initialState : {
        isLoading : false,
        results : [],
        error : null
    },
    extraReducers : (builder)=>{
        builder.addCase(resultAction.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(resultAction.fulfilled, (state, action)=>{
            state.isLoading =false
            state.results = action.payload
            state.error = null

        })
        builder.addCase(resultAction.rejected, (state, action)=>{
            state.isLoading = false
            state.results = []
            state.error = action.error.message

        })
    }
})

export default resultSlice.reducer;