import { configureStore } from "@reduxjs/toolkit"
import getFetchReducer from "../features/fetching/getFetchUser";
import postFetchReducer from "../features/fetching/postFetch";
import translateReducer from "../features/translate/translateSlice";
import RefreshReducer from "../features/RefreshSlice";
import resultReducer from "../features/result/resultSlice";

const store = configureStore({
    reducer : {
        result : resultReducer,
        getFetchUser : getFetchReducer,
        postFetch : postFetchReducer, 
        refresh : RefreshReducer,
        translate : translateReducer
    }
})


export default store;