import { configureStore } from "@reduxjs/toolkit"
import getFetchReducer from "../features/fetching/getFetchUser";
import resultReducer from "../features/result/resultSlice";

const store = configureStore({
    reducer : {
        result : resultReducer,
        getFetchUser : getFetchReducer
    }
})


export default store;