import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import  axios from "axios"

export const postFetchAction = createAsyncThunk('postFetch/data', async ({api,data, headers})=>{
    const response = await axios.post(api, data, {headers})
    return response.data
})

const postFetch = createSlice({
    name  : 'postFetch',
    initialState : {
        isLoading : false,
        response : [],
        error : null
    },

    extraReducers : (builder)=>{
        builder.addCase(postFetchAction.pending ,(state)=>{
            state.isLoading = true
        })
        builder.addCase(postFetchAction.fulfilled ,(state, action)=>{
            state.isLoading = false
            state.response = action.payload
            state.error = null
        })
        builder.addCase(postFetchAction.rejected ,(state, action)=>{
            state.isLoading = false
            state.response = []
            state.error = action.error.message
        })
    }
})

 

export default postFetch.reducer ;