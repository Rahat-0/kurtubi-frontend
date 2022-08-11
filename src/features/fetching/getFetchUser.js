import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import  axios from "axios"

export const userData = createAsyncThunk('getFetchUser/data', async ({api})=>{
    const response = await axios.get(api)
    return response.data
})

const getFetchUser = createSlice({
    name  : 'getFetchUser',
    initialState : {
        isLoading : false,
        users : [],
        error : null
    },

    extraReducers : (builder)=>{
        builder.addCase(userData.pending ,(state)=>{
            state.isLoading = true
        })
        builder.addCase(userData.fulfilled ,(state, action)=>{
            state.isLoading = false
            state.users = action.payload
            state.error = null
        })
        builder.addCase(userData.rejected ,(state, action)=>{
            state.isLoading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

 

export default getFetchUser.reducer ;