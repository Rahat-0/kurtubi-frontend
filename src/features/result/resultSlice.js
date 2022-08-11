import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import rootapi from '../../rootAPI'

export const resultAction = createAsyncThunk('result/all', async ({branch, classes})=>{
    const res = await axios.get(`${rootapi}/api/result/all/${branch}/${classes}`)
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