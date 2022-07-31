import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import  axios from "axios"

export const studentData = createAsyncThunk('student/data', async ({user, branch})=>{
    const response = await axios.get(`http://localhost:5000/api/${user}/all/${branch}`)
    return response.data
})

const studentSlice = createSlice({
    name  : 'student',
    initialState : {
        isLoading : false,
        users : [{student_id : '', teacher_id : ''}],
        error : null
    },

    extraReducers : (builder)=>{
        builder.addCase(studentData.pending ,(state)=>{
            state.isLoading = true
        })
        builder.addCase(studentData.fulfilled ,(state, action)=>{
            state.isLoading = false
            state.users = action.payload
            state.error = null
        })
        builder.addCase(studentData.rejected ,(state, action)=>{
            state.isLoading = false
            state.users = [{student_id : '', teacher_id : ''}]
            state.error = action.error.message
        })
    }
})

 

export default studentSlice.reducer ;