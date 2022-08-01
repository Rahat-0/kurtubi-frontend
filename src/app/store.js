import { configureStore } from "@reduxjs/toolkit"
import resultReducer from "../features/result/resultSlice";
import branchReducer from "../features/students/branchSlice";
import studentReducer from "../features/students/studentSlice"

const store = configureStore({
    reducer : {
        student : studentReducer,
        branch : branchReducer,
        result : resultReducer
    }
})


export default store;