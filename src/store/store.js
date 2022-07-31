import { configureStore } from "@reduxjs/toolkit"
import branchReducer from "../features/students/branchSlice";
import studentReducer from "../features/students/studentSlice"

const store = configureStore({
    reducer : {
        student : studentReducer,
        branch : branchReducer
    }
})


export default store;